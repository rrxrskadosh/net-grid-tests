//Inventory List Javascript

function inventoryList() {
    let items = [];
  
    const add = (name) => {
      const names = items.filter((item) => item.name === name);
      if (names.length === 0) {
        items.push({ name: name });
      }
    };
  
    const remove = (name) => {
      items = items.filter((item) => item.name !== name);
    };
  
    const getList = () => {
      console.log(items);
      return items;
    };
  
    // add("Camisa");
    // add("Pantalón");
    // add("Zapatos");
    // remove("Zapatos")
    // getList();
  
    return { add, remove, getList };
  }
  
  inventoryList();
