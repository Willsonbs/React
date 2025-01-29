import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
return (

    <div className="h-screen w-screen bg-slate-900 text-white p-6">
        <div className="w-[500px] space-y-4">
            <h1 className="text-3xl text-slate-100 font-bold text-center mb-5">
                Detalhes das Tarefas
            </h1>

            <div className="bg-slate-400 p-4 rounded-md">
                <p className="text-xl text-white font-bold">{title}</p>
                <p className="text-md text-white">{description}</p>
                
            </div>
        </div>
    </div>    
  );
}

export default TaskPage;
