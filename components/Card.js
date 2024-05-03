const Card = () => {
  return (
    <div className="w-auto flex items-center gap-4">
    <div className="flex flex-col gap-4">
      <div className="p-4 rounded-[10px] flex flex-col items-center gap-4 bg-white">
        <div>
          <img src="/facebook.svg" alt="facebook logo" className="" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-[#006FBA] font-bold">Facebook</div>
          <div className="text-[#68718B] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus
            dui faucibus eu.
          </div>
        </div>
      </div>
      <div className="p-4 rounded-[10px] flex flex-col items-center gap-4 bg-white">
        <div>
          <img src="/twitter.svg" alt="facebook logo" className="" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-[#006FBA] font-bold">Twitter</div>
          <div className="text-[#68718B] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus
            dui faucibus eu.
          </div>
        </div>
      </div>
      </div>
      <div>
      <div className="p-4 rounded-[10px] flex flex-col items-center gap-4 bg-white">
        <div>
          <img src="/google.svg" alt="facebook logo" className="" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-[#006FBA] font-bold">Google</div>
          <div className="text-[#68718B] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus
            dui faucibus eu.
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Card;
