import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { BiSearch } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import { images } from "../data/images";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState(images);
  const [reorderedImage, setReorderedImage] = useState([]);
  const [goHome, setGoHome] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = [...item];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setItem(items);
  };

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filteredItems = item.filter((image) => {
      const query = searchQuery.toLowerCase();
      const tagCharacter = image.tag.toLowerCase();
      return tagCharacter.includes(query);
    });
    setItem(filteredItems);
  }, [searchQuery]);

  return (
    <div className="w-screen min-h-screen">
      <Navigation />
      <div className="bg-gray-300 w-full h-full pt-24 lg:pt-32 justify-center">
        <h1 className="text-lime-950 text-4xl font-bold text-center lg:text-5xl">
          Gallery.
        </h1>

        <form className="flex flex-row justify-between border-2 border-lime-950 rounded-xl h-16 mt-12 mx-10 p-5 items-center">
          <input
            type="text"
            placeholder="Search by tags e.g haikyuu"
            className="bg-transparent w-full border-0 outline-none"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          {/* <button className="bg-none border-0">
            <BiSearch className="text-2xl" />
          </button> */}
        </form>

        {/* {goHome && (
          <Link to="/home">
            <BiArrowBack className=" ml-10 text-2xl justify-center mt-5" />
          </Link>
        )} */}

        <div className="block">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="item">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="container w-full"
                >
                  {item &&
                    item.map(({ id, img, tag }, index) => {
                      return (
                        <Draggable
                          key={id}
                          draggableId={id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {loading ? (
                                <div className="justify-center items-center mx-32 my-20">
                                  <Oval
                                    height={70}
                                    width={80}
                                    color="#4fa94d"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel="oval-loading"
                                    secondaryColor="#4fa94d"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}
                                  />
                                </div>
                              ) : (
                                <img src={img} alt={`${tag} image`} />
                              )}
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default Home;
