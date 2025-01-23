import Button from "./Button";
import { BookmarkIcon, PlayIcon, PlusIcon } from "@heroicons/react/24/outline";

function PageHeader() {
  return (
    <div className="flex justify-between gap-2 w-full items-center border-b-2 p-2">
      <div>Part Risk Manager / My Data</div>
      <div className="flex gap-2">
        <Button className="flex">
          <BookmarkIcon className="h-5 w-5 mr-2" />
          Saved Reports
        </Button>
        <Button className="flex">
          <PlayIcon className="h-5 w-5 mr-2" />
          Run Report
        </Button>
        <Button fill className="flex">
          <PlusIcon className="h-5 w-5 mr-2" />
          New BOM
        </Button>
      </div>
    </div>
  );
}

export default PageHeader;
