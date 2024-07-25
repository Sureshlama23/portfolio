import Service from "./Service";

const ServiceList = () => {
  return (
    <>
      <div className="main-container max-w-full h-[500px]">
        <h1 className="text-center text-3xl underline font-bold p-10">
          My Services
        </h1>
        <Service></Service>
      </div>
    </>
  );
};

export default ServiceList;
