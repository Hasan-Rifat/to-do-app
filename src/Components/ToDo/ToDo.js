import React from "react";
import useGetTOdo from "../../hooks/useGetTOdo";

const ToDo = () => {
  const [list, setList] = useGetTOdo();
  console.log(list);
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        <div class=" bg-[#1d283a] shadow-xl max-w-screen-sm mx-auto">
          {list.map((item) => (
            <>
              <div class=" grid grid-cols-2 mb-4 justify-center">
                <input
                  type="checkbox"
                  class="checkbox text-white bg-[#570df8]"
                />
                <h2 class="card-whit">{item.name}</h2>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToDo;
