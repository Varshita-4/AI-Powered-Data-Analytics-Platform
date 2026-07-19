import { useState } from "react";
import { Link } from "react-router-dom";
import { analyzeDataset } from "../api";
import AnalysisReport from "./AnalysisReport";

function UploadDataset() {
  const [file, setFile] = useState(null);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select a CSV file.");
      return;
    }

    try {
      setLoading(true);

      const result = await analyzeDataset(file);

      setReport(result);
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const reportId = report?.saved_report?.report_id;

  return (
    <div className="space-y-10">

      {/* Upload Card */}
      <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-8 shadow-xl">

        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold">
            AI Data Analysis
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Upload Your Dataset
          </h2>

          <p className="mt-3 text-slate-400 leading-7">
            Upload a CSV file and let InsightFlow AI automatically clean
            your dataset, generate statistics, visualize patterns,
            detect outliers, and create AI-powered business insights.
          </p>
        </div>

        {/* Upload Area */}

        <div className="mt-8">

          <label
            htmlFor="csv-upload"
            className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-cyan-500/30 bg-slate-900/50 px-8 py-12 transition hover:border-cyan-400 hover:bg-slate-900"
          >

            <div className="text-5xl">📁</div>

            <h3 className="mt-4 text-xl font-semibold">
              Drop your CSV here
            </h3>

            <p className="mt-2 text-slate-400 text-center">
              or click to browse your computer
            </p>

            <button
              type="button"
              className="mt-6 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
            >
              Browse Files
            </button>

            <input
              id="csv-upload"
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

        </div>

        {/* Selected File */}

        {file && (

          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-5">

            <div className="flex items-center justify-between flex-wrap gap-4">

              <div>

                <p className="text-cyan-400 font-semibold">
                  Selected Dataset
                </p>

                <p className="mt-2 text-white font-medium">
                  📄 {file.name}
                </p>

                <p className="text-slate-400 text-sm mt-1">
                  {(file.size / 1024).toFixed(2)} KB
                </p>

              </div>

              <button
                onClick={handleAnalyze}
                disabled={loading}
                className="rounded-xl bg-cyan-500 px-7 py-3 font-bold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Analyzing..." : "Analyze Dataset"}
              </button>

            </div>

            {loading && (

              <div className="mt-6">

                <div className="h-2 overflow-hidden rounded-full bg-slate-700">

                  <div className="h-full w-full animate-pulse rounded-full bg-cyan-400"></div>

                </div>

                <p className="mt-3 text-sm text-slate-400">
                  Cleaning data, generating visualizations and AI insights...
                </p>

              </div>

            )}

          </div>

        )}

      </section>

      {/* Analysis */}

      <AnalysisReport report={report} />

      {/* Actions */}

      {reportId && (

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <h3 className="text-2xl font-bold text-white">
                Analysis Complete
              </h3>

              <p className="mt-2 text-slate-400">
                Report ID
              </p>

              <p className="font-mono text-cyan-400 mt-1">
                {reportId}
              </p>

              <p className="mt-4 text-slate-400 leading-7">
                Continue exploring your dataset, generate a professional AI
                report, chat with your data, or download cleaned datasets.
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <Link
                to={`/report/${reportId}`}
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
              >
                AI Report
              </Link>

              <Link
                to={`/chat/${reportId}`}
                className="rounded-xl bg-slate-800 px-6 py-3 font-semibold hover:bg-slate-700 transition"
              >
                Chat Dataset
              </Link>

              <a
                href={`${import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000"}/reports/${reportId}/download-cleaned`}
                className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition"
              >
                Cleaned CSV
              </a>

              <a
                href={`${import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000"}/reports/${reportId}/download-no-outliers`}
                className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500 transition"
              >
                No Outliers CSV
              </a>

            </div>

          </div>

        </section>

      )}

    </div>
  );
}

export default UploadDataset;