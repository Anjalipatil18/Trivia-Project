const knex=require("./connectionDb")

insertData=(data)=>{
    return knex('Trivia').insert(data)
};

select = (user_data)=>{
    return knex.select("*").from("Trivia")
}
module.exports={insertData,select}
