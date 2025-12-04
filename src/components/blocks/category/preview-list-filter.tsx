import CategoryFilter from "./category-filter";
import PreviewListSearch from "./preview-list-search";

const PreviewListFilter = ({ numberOfBlocks }: { numberOfBlocks: number }) => {
  return (
    <div className="flex items-center justify-between bg-muted ps-2 pe-4 py-2 rounded-lg border border-border/50">
      <div className="flex items-end gap-3">
        <CategoryFilter />
        <PreviewListSearch />
      </div>
      <p className="max-sm:hidden text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{numberOfBlocks}</span>{" "}
        {numberOfBlocks === 1 ? "block" : "blocks"} found
      </p>
    </div>
  );
};

export default PreviewListFilter;
