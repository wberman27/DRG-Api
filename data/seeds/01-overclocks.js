// STRETCH
exports.seed = function(knex){
    return knex("overclocks").truncate()
    .then(function(){
        return knex("overclocks").insert([
            {weapon:"CRSPR Flamethrower", name: "Lighter Tanks", effect:"+75 Max Fuel", description:"Lighter weight gear means more fuel and sandwiches."},
            {weapon:"CRSPR Flamethrower", name: "Sticky Additive", effect:"+1 Damage, +1s Sticky Flame Duration", description:"Special additive compound extends the Sticky Flame duration and increases direct damage."},
            {weapon:"CRSPR Flamethrower", name: "Compact Feed Valves", effect:"+25 Tank Size, -2m Flame Reach", description:"The smaller mechanism leaves room to increase tank capacity at the cost of operational range."}
        ])
    })
}