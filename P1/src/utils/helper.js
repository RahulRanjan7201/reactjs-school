export function filterData(searchText, offerlist) {
    const data =  offerlist.filter(offer => offer?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
    console.log(data)
    return data;
   }