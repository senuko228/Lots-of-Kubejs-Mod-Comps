ServerEvents.recipes(event => {

  const lava = Fluid.of('minecraft:lava', 100)

  function addHeatedRecipe(shard, result, count) {
    event.recipes.create.mixing([
      Item.of(result),
      Item.of(result).withChance(0.25)
    ], [
      Item.of(shard, count),
      lava
    ]).heated()
  }

  function addSuperHeatedRecipe(shard, result, count) {
    event.recipes.create.mixing([
      Item.of(result),
      Item.of(result).withChance(0.25)
    ], [
      Item.of(shard, count),
      lava
    ]).superheated()
  }

  // COMMON (heated, 3 shards)
  addHeatedRecipe('geore:coal_shard', 'minecraft:coal', 3)
  addHeatedRecipe('geore:copper_shard', 'minecraft:copper_ingot', 3)
  addHeatedRecipe('geore:iron_shard', 'minecraft:iron_ingot', 3)
  addHeatedRecipe('geore:zinc_shard', 'create:zinc_ingot', 3)

  // MID (heated, 4 shards)
  addHeatedRecipe('geore:gold_shard', 'minecraft:gold_ingot', 4)
  addHeatedRecipe('geore:lapis_shard', 'minecraft:lapis_lazuli', 4)
  addHeatedRecipe('geore:redstone_shard', 'minecraft:redstone', 4)
  addHeatedRecipe('geore:quartz_shard', 'minecraft:quartz', 4)

  // RARE (superheated, 5 shards)
  addSuperHeatedRecipe('geore:diamond_shard', 'minecraft:diamond', 5)
  addSuperHeatedRecipe('geore:emerald_shard', 'minecraft:emerald', 5)

  // ULTRA (superheated, 6 shards)
  addSuperHeatedRecipe('geore:ancient_debris_shard', 'minecraft:netherite_scrap', 6)


// Used Mods: Geores, Create
})
