import { onProductSearch } from "@/actions/navbar";

export default function SearchBar({ channel }: { channel: string }) {
  return (
    <form
      action={onProductSearch.bind(null, channel)}
      className="hidden md:flex items-center space-x-2 border p-3 rounded-md mr-2"
    >
      <img src="/icons/search.png" alt="Search Icon" height={16} width={16} />
      <input
        className="w-full text-sm outline-none placeholder-gray-500 text-gray-500"
        type="text"
        placeholder="Search"
        name="search-bar"
      />
    </form>
  );
}
