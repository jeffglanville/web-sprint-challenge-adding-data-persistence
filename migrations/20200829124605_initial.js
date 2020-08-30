
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("projectsId")
    table.text("name").notNull()
    table.text("description")
    table.boolean("complete").notNull().defaultTo(false)
  })

  await knex.schema.createTable("resources", (table) => {
    table.increments("resourcesId")
    table.text("name").notNull()
    table.text("description")
    // table.integer("projects_id")
    //   .references("projectsId")
    //   .inTable("projects")
  })

  await knex.schema.createTable("tasks", (table) => {
    table.increments("tasksId")
    table.text("description")
    table.text("notes")
    table.boolean("complete").notNull().defaultTo(false)
    // table.integer("projects_id")
    //   .references("projectsId")
    //   .inTable("projects")
  })

  // await knex.schema.createTable("projects_resources", (table) => {
  //   table.integer("projects_id")
  //       .notNull()
  //       .references("projectsId")
  //       .inTable("projects")
  //   table.integer("resources_id")
  //       .notNull()
  //       .references("resourcesId")
  //       .inTable("resources")
  //   table.primary(["projects_id", "resources_id"])
  // })

  await knex.schema.createTable("projects_tasks", (table) => {
    table.integer("projects_id")
        .notNull()
        .references("projectsId")
        .inTable("projects")
    table.integer("tasks_id")
        .notNull()
        .references("tasksId")
        .inTable("tasks")
    table.primary(["projects_id", "tasks_id"])
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_tasks")
    await knex.schema.dropTableIfExists("projects_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
