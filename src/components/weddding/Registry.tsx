import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Registry() {
  return (
    <Dialog>
      <DialogTrigger className="border rounded-lg xl:w-1/3 w-2/3 mx-auto p-2 text-slate-900 transition bg-gray-200 hover:bg-gray-400">
        Registry
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registry</DialogTitle>
          <DialogDescription>
            <p>
              Your presence at our wedding is the greatest gift we could ask
              for.
            </p>
            <p>
              Should you wish to honor us with a gift, a contribution towards
              our future together would be sincerely appreciated.
            </p>
            <div className="flex justify-center mt-4">
              <img src="usagyuun_party.webp" alt="" />
            </div>
            <br />
            <p>
              <span className="font-bold">Account Name:</span> Joy and Alvin
            </p>
            <p>
              <span className="font-bold">BSB:</span> 303-432
            </p>
            <p>
              <span className="font-bold">Account Number:</span> 1469476
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
