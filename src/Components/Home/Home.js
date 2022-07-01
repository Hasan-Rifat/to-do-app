import React from "react";
import useGetTOdo from "../../hooks/useGetTOdo";

const Home = () => {
  const [list, setList] = useGetTOdo();
  const getTodo = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const task = e.target.task.value;
    const date = e.target.date.value;

    const list = {
      title: title,
      task: task,
      date: date,
      complete: false,
    };
    console.log(list);
    //TODO: create data
    const url = `http://localhost:5000/todo/`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        console.log(data);
      });
  };

  const handleCheckbox = (id) => {
    console.log(id);
    const list = {
      complete: true,
    };
    console.log(list);
    //TODO: create data
    const url = `http://localhost:5000/todo/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        console.log(data);
      });
  };
  return (
    <section>
      <div className="px-16 max-w-7xl mx-auto ">
        <div className="py-5">
          <div>
            <div class=" body-font relative">
              <div class="container p-5 mx-auto ">
                <div className="bg-[#1d283a]  mx-auto py-8 rounded">
                  <div class="flex flex-col text-center w-full">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 ">
                      TO DO APP
                    </h1>
                  </div>
                  <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <form onSubmit={getTodo}>
                      <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                          <div class="relative">
                            <label for="name" class="leading-7 text-sm  ">
                              Title
                            </label>
                            <input
                              name="title"
                              placeholder="write your title"
                              type="text"
                              class="w-full bg-[#0f1729] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                          </div>
                        </div>
                        <div class="p-2 w-1/2">
                          <div class="relative">
                            <label for="email" class="leading-7 text-sm  ">
                              Date
                            </label>
                            <input
                              placeholder="choose your date"
                              type="date"
                              name="date"
                              class="w-full bg-[#1d283a] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                          </div>
                        </div>
                        <div class="p-2 w-full">
                          <div class="relative">
                            <label for="message" class="leading-7 text-sm  ">
                              Task Details
                            </label>
                            <textarea
                              name="task"
                              placeholder="write your task"
                              id="message"
                              class="w-full bg-[#0f1729] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                          </div>
                        </div>
                        <div class="p-2 w-full">
                          <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Add a task
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class=" body-font relative">
              <div class="container p-5 mx-auto ">
                <div className="bg-[#1d283a] mx-auto rounded">
                  <div className="p-5">
                    {list.map((item) => (
                      <>
                        {item?.complete === true ? (
                          ""
                        ) : (
                          <>
                            <div class="card shadow-xl bg-[#0f1729] my-4">
                              <div class="py-8 justify-center flex items-center text-center">
                                <div className="flex w-4/6">
                                  <input
                                    type="checkbox"
                                    class="checkbox text-white bg-[#570df8]"
                                    onClick={() => handleCheckbox(item._id)}
                                  />
                                  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5">
                                    <h2 class="card-title ml-5">
                                      {item.title}
                                    </h2>
                                    <p>{item.task}</p>
                                    <p>{item.date}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
