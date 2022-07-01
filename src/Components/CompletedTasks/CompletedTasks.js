import React from "react";
import useGetTOdo from "../../hooks/useGetTOdo";

const CompletedTasks = () => {
  const [list, setList] = useGetTOdo();
  return (
    <section>
      <div className="px-16 max-w-7xl mx-auto">
        <div class=" body-font relative">
          <div class="container p-5 mx-auto ">
            <div className="bg-[#1d283a] mx-auto rounded">
              <div className="p-5">
                {list.map((item) => (
                  <>
                    {item?.complete === true ? (
                      <>
                        <div class="card shadow-xl bg-[#0f1729] my-4">
                          <div class="py-8 justify-center flex items-center text-center">
                            <div className="flex w-4/6">
                              <input
                                type="checkbox"
                                class="checkbox text-white bg-[#570df8]"
                              />
                              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
                                <h2 class="card-title ml-5">{item.title}</h2>
                                <p>{item.task}</p>
                                <p>{item.date}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompletedTasks;
