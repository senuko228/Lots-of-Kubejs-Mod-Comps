// Adds multiple vanilla/forge tags into kubejs:compostings
ServerEvents.tags('item', event => {

  event.add('kubejs:compostings', '#minecraft:leaves')
  event.add('kubejs:compostings', '#minecraft:saplings')
  event.add('kubejs:compostings', '#forge:crops')

})
