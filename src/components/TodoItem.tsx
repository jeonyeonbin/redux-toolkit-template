import React from "react";
import useTodos from "$Root/hooks/useTodos";
type Props = {
  id: number;
  text: string;
};
const TodoItem: React.FC<Props> = ({ id, text }: Props) => {
  const { handleClickRemove } = useTodos();
  return (
    <div>
      <li>
        {text}
        <button type="button" onClick={handleClickRemove(id)}>
          취소하기
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
