import { memo } from "react";
import { StringType } from "@/lib/definitions";
import { IconCircleCheck } from "@/app/_ui/icons";

//* Not yet in use, you can update
const TodoListItem = memo(function TodoListItem({ todo }: { todo: StringType }) {
    // fill="#ADADC9"
    return (
        <div className="flex">
            <IconCircleCheck fill="gray" color="white" strokeWidth={1}/>
            <p className="text-xs">{todo}</p>
        </div>
    )
});

export default TodoListItem;