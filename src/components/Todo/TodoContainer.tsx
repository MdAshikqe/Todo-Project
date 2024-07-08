import { useAppSelector } from "@/redux/hooks";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";
import { useGetTodoQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // const { todos } = useAppSelector((state) => state.todos);
  const { data: todos, isLoading, isError } = useGetTodoQuery(undefined);
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-10">My Todo List</h1>
      <div className="flex justify-between py-3">
        <TodoModal></TodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-3">
        {todos.map((item) => (
          <TodoCard
            // title={item.title}
            // description={item.description}
            {...item}
          ></TodoCard>
        ))}
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
