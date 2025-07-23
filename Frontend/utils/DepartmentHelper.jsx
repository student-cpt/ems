



export const columns=[
    {
        name: "s .no",
        selector:(row)=> row.id,
    },
    {
        name: "Department Name",
        selector:(row)=> row.dep_name
    },
    {
        name:"Actions",
        selector:(row)=> row._action

    }
    
]