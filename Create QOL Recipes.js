// Converts leather into phantom membrane using Create bulk haunting
// Set to true to enable this recipe, or false to disable it
const ENABLE_LEATHER_TO_MEMBRANE = true

// Converts 3 rotten flesh into 1 leather using Create compacting
// Set to true to enable this recipe, or false to disable it
const ENABLE_ROTTEN_FLESH_TO_LEATHER_COMPACTING = true

// Converts 4 string into 1 white wool using Create compacting
// Set to true to enable this recipe, or false to disable it
const ENABLE_STRING_TO_WOOL = true

// Converts Create dough into slimeball using Create bulk haunting
// Set to true to enable this recipe, or false to disable it
const ENABLE_DOUGH_TO_SLIMEBALL_HAUNTING = true

// Converts Create Addition biomass into rotten flesh using Create bulk haunting
// Set to true to enable this recipe, or false to disable it
const ENABLE_BIOMASS_TO_ROTTEN_FLESH_HAUNTING = true

// Converts 9 compostable items (kubejs:compostings) into Farmers Delight organic compost using Create compacting
// Set to true to enable this recipe, or false to disable it
const ENABLE_COMPOST_TO_ORGANIC_COMPOST = true

// Converts Farmers Delight organic compost into dirt using smelting
// Set to true to enable this recipe, or false to disable it
const ENABLE_ORGANIC_COMPOST_TO_DIRT_SMELTING = true

ServerEvents.recipes(event => {

  if (ENABLE_LEATHER_TO_MEMBRANE) {
    event.recipes.createHaunting(
      'minecraft:phantom_membrane',
      'minecraft:leather'
    )
  }

  if (ENABLE_ROTTEN_FLESH_TO_LEATHER_COMPACTING) {
    event.recipes.createCompacting(
      'minecraft:leather',
      [
        'minecraft:rotten_flesh',
        'minecraft:rotten_flesh',
        'minecraft:rotten_flesh'
      ]
    )
  }

  if (ENABLE_STRING_TO_WOOL) {
    event.recipes.createCompacting(
      'minecraft:white_wool',
      [
        'minecraft:string',
        'minecraft:string',
        'minecraft:string',
        'minecraft:string'
      ]
    )
  }

  if (ENABLE_DOUGH_TO_SLIMEBALL_HAUNTING) {
    event.recipes.createHaunting(
      'minecraft:slime_ball',
      'create:dough'
    )
  }

  if (ENABLE_BIOMASS_TO_ROTTEN_FLESH_HAUNTING) {
    event.recipes.createHaunting(
      'minecraft:rotten_flesh',
      'createaddition:biomass'
    )
  }

  if (ENABLE_COMPOST_TO_ORGANIC_COMPOST) {
    event.recipes.createCompacting(
      'farmersdelight:organic_compost',
      [
        '#kubejs:compostings',
        '#kubejs:compostings',
        '#kubejs:compostings',
        '#kubejs:compostings',
        '#kubejs:compostings',
        '#kubejs:compostings',
        '#kubejs:compostings',
        '#kubejs:compostings',
        '#kubejs:compostings'
      ]
    )
  }

  if (ENABLE_ORGANIC_COMPOST_TO_DIRT_SMELTING) {
    event.smelting(
      'minecraft:dirt',
      'farmersdelight:organic_compost'
    )
  }

})

//*
rawr rawr rawr rawr rawr
USED MODS / DEPENDENCIES
rawr rawr rawr rawr rawr
- KubeJS (core scripting system)
- Create (bulk haunting, compacting)
- Create: Addition (biomass)
- Farmers Delight (organic compost)
- Minecraft Vanilla (smelting, base items)
*//
