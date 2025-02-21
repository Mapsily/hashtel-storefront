import List from "./components/list";
import {
  policyTextList_1,
  policyTextList_2,
  warrantyTable,
  refundTable,
  policyTextList_3,
  salesChannelsTable as salesChannels
} from "./lib/data";
import Table from "./components/table";

export default function Page() {
  return (
    <>
      <div className="bg-white p-8 text-center border">
        <h1 className="text-4xl font-semibold mb-2">Warranty Policy</h1>
        <span className="text-gray-600">Last Updated on 22/08/24</span>
      </div>
      <div className="bg-accent py-8 md:px-16 px-4">
        <div className="flex flex-col gap-6 bg-white md:px-12 px-4 py-6 border">
          <List data={policyTextList_1} />
          <p>
            *Note: The charging cables supplied with the HASHTEL products is not
            under any warranty The warranty period starts from the date of the
            original purchase of the SKU(s) by the first end-user. The invoice
            may consist of different SKU(s) having different warranty periods.
            Subject to applicable national laws, the Original Warranty Period
            under no circumstances will be extended and / or renewed and / or
            otherwise affected due to subsequent re-sale, repair or replacement
            of the Product(s). However, in case of repaired and / or replaced
            part(s) the warranty period will be for the remaining period of the
            original Warranty Period.
          </p>
          <List data={policyTextList_2} count={10} />
          <p>Accordingly, following shall be considered:</p>
          <div className="w-full flex  flex-col items-center gap-4">
            <Table data={warrantyTable} />
            <p>Applicable only for HASHTEL products.</p>
            <Table data={refundTable} />
          </div>
          <List data={policyTextList_3} count={14} />
          <h3 className="font-bold">Authorised Sales Channels:</h3>
          <div className="w-full flex  flex-col items-center gap-4">
            <Table data={salesChannels} />
          </div>
          <p><b>Authorised Sellers:</b></p>
        </div>
      </div>
    </>
  );
}
