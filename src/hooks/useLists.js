import  { useState } from 'react';

function useLists(init)
{
    const [list, setList] = useState(init);

    return{
        list,
        removeItem(item){
            const filteredList = list.filter(v => v.name !== item);
            setList(filteredList);
        },
        saveItem(index,newval){
            const copyList = [...list];
            copyList[index].name = newval;
        }
    }
}

export default useLists