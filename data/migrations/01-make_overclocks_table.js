exports.up = function(knex){
    return knex.schema.createTable("overclocks", table =>{
        table.increments(); //create primary key (id), which auto increments
        table.text("weapon", 128).notNullable();
        table.text("name", 128).unique().notNullable();
        table.text("effect").notNullable();
        table.text("description").notNullable();
    })
}
exports.down = function(knex){
    return knex.schema.dropTableIfExists("overclocks")
}