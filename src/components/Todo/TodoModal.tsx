import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addToDo } from "@/redux/features/todoSlice";

const TodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const randomString = Math.random().toString(32).substring(2, 10);
    const taskDetails = {
      id: randomString,
      title: task,
      description: description,
    };
    dispatch(addToDo(taskDetails));
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-500">Add Todo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add to task to your project finished
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogClose asChild>
            <div className="flex justify-end">
              <Button type="submit">Save changes</Button>
            </div>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TodoModal;
