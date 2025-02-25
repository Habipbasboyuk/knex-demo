	
import knex from "../lib/Knex.js";
import { Model } from "objection";
 
// instantiate the model
Model.knex(knex);
 
// define the NavigationItem model
class pages extends Model {
  static get tableName() {
    return "pages";
  }
 
  static get idColumn() {
    return "id";
  }
 
  static get jsonSchema() {
    return {
      type: "object",
      required: ["label", "url"],
      properties: {
        id: { type: "integer" },
        label: { type: "string", minLength: 1, maxLength: 255 },
        target: { type: "string", maxLength: 255 },
        url: { type: "string", minLength: 1, maxLength: 255 },
      },
    };
  }
}
 
export default pages;