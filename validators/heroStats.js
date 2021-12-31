const statsSchema = {
  type: "object",
  required: ["name", "strength","dexterity", "intellect", "isInvincible"],
  properties: {
    name: {
      type: "string"
    },
    strength: {
      type: "number"
    },
    dexterity: {
      type: "number"
    },
    intellect: {
      type: "number"
    },
    isInvincible: {
      type: "boolean"
    },
  },
  additionalProperties: false
}

module.exports = statsSchema