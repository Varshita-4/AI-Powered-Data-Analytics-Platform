import Layout from "../components/Layout";
import UploadDataset from "../components/UploadDataset";

function Dashboard() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto animate-float-in">
        <h1 className="text-5xl font-extrabold text-cyan-400">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-3 text-lg max-w-3xl">
          Upload your CSV dataset, generate AI-powered insights, explore
          visualizations, and interact with your data through natural language.
        </p>

        <div className="mt-8">
          <UploadDataset />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;