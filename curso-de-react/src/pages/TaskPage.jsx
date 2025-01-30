import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-900 text-white flex justify-center ">
      <div className="w-[500px] space-y-4 p-6 rounded-lg shadow-lg">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center mb-5">
            Detalhes das Tarefas
          </h1>
        </div>

        <div className="bg-slate-400 p-4 rounded-md ">
          <p className="text-xl text-white font-bold bg-slate-800 p-1 rounded-md">
            {title}
          </p>
          <p className="text-md text-slate-800 p-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
