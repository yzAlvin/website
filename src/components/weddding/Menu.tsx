import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Menu() {
  return (
    <Dialog>
      <DialogTrigger className="border rounded-lg xl:w-1/3 w-2/3 mx-auto p-2 text-slate-900 transition bg-gray-200 hover:bg-gray-400">
        Menu
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Menu</DialogTitle>
          <DialogDescription className="space-y-3">
            <div className="flex justify-center">
              <img src="usagyuun_eat.webp" alt="" />
            </div>
            <div>
              <h2 className="font-semibold font-lg">Entrées</h2>
              <ul>
                <li>Tempura Scallops (NF)</li>
                <li>Crispy Pork Belly (GF/NF) </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold font-lg">Mains</h2>
              <ul>
                <li>Crumbed Barramundi (NF)</li>
                <li>Grain Fed Beef Tenderloin (DF/NF)</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold font-lg">Sides</h2>
              <ul>
                <li>
                  Lemon and Manuka Honey Roasted Japanese Pumpkins (GF/DF/NF/V)
                </li>

                <li>Herbed Lemon Pearl Couscous (DF/NF/V)</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold font-lg">Dessert</h2>
              <ul>
                <li>Valencia Orange and Almond Cake (GF)</li>
                <li>Soft Centred Chocolate Fondant (NF)</li>
              </ul>
            </div>
            <p className="text-xs">
              If you have a dietary requirement we have already let the kitchen
              know.
            </p>
          </DialogDescription>
          <DialogTitle className="pt-5">Drinks</DialogTitle>
          <DialogDescription className="space-y-3">
            <div className="flex justify-center">
              <img src="usagyuun_drink.webp" alt="" />
            </div>
            <ul className="space-y-1">
              <li>
                <span className="font-semibold">Sparkling</span> - Prosecco
              </li>
              <li>
                <span className="font-semibold">White Wine</span> - Moscato,
                Semillon Sauvignon Blanc
              </li>
              <li>
                <span className="font-semibold">Red Wine</span> - Cabernet
                Merlot, Shiraz Cabernet
              </li>
              <li>
                <span className="font-semibold">Beer</span> - Crown Lager,
                Carlton Draught, Peroni, Furphy, VB, Cascade Light
              </li>
              <li>
                <span className="font-semibold">Cider</span> - Apple Cider, Pear
                Cider
              </li>
              <li>
                <span className="font-semibold">Spirits</span> - Peanut Butter
                Whisky, Vodka
              </li>
              <li>
                <span className="font-semibold">Non-Alcoholic</span> - Assorted
                Soft Drinks, Mineral Water, Juices
              </li>
            </ul>
            <p className="text-xs">
              Venue has a requirement that all spirits must be mixed.
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
