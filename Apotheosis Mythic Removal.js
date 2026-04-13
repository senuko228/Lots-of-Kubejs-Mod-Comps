 // Removes the Mythic Affixed items (and the Godforged Pearl)
PlayerEvents.inventoryChanged(event => {
  const player = event.player

  // scan main inventory + armor + offhand safely
  const slots = player.inventory.getAllItems()

  slots.forEach(stack => {
    if (stack.isEmpty()) return

    const nbt = stack.getNbt()
    if (!nbt || !nbt.affix_data) return

    if (nbt.affix_data.rarity != "apotheosis:mythic") return

    // prevent re-trigger loops
    if (nbt.kubejs_mythic_processed) return

    const replaced = Item.of("minecraft:diamond")
    replaced.setNbt({ kubejs_mythic_processed: 1 })

    stack.setCount(0)
    player.give(replaced)
    // Mods Used: Apotheosis
  })
})
