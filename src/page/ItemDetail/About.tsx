export default function About() {
  return (
    <div>
      <div className="text-white text-xl font-extrabold">About</div>

      <div className="rounded-lg p-4 border border-primary-100 mt-4">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <div className="text-primary-100 text-xs font-semibold leading-5">
              CLASS
            </div>
            <div className="flex items-center">
              <img alt="icon" src="/assets/images/warrrior.svg" />
              <span className="pl-1 text-white font-semibold leading-6">
                Warrior
              </span>
            </div>
          </div>

          <div className="col-span-1">
            <div className="text-primary-100 text-xs font-semibold leading-5">
              RARITY
            </div>
            <div className="flex items-center">
              <img alt="icon" src="/assets/images/RarityLegend.svg" />
              <span className="pl-1 text-white font-semibold leading-6">
                Legendary
              </span>
            </div>
          </div>

          <div className="col-span-1">
            <div className="text-primary-100 text-xs font-semibold leading-5">
              TRAINNING COUNT
            </div>
            <div className="text-white font-semibold leading-6">3/7</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="text-primary-100 text-xs font-semibold leading-5">
            Owner
          </div>
          <div className="flex items-center">
            <span className="text-white font-bold leading-6">NAMLQLC</span>
            <span className="pl-2 text-primary-100 text-sm leading 5.5">
              (0xx6...rbwiuer92b3r92b9d2b3e92br3)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
