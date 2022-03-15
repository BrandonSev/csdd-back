const UserController = require("./users.controllers");
const RolesController = require("./roles.controllers");
const StatusController = require("./status.controllers");
const ReceptionPlaceController = require("./reception_place.controllers");
const AssetsController = require("./assets.controllers");
const AdoptionPlaceController = require("./adoption_place.controllers");
const ProvinceController = require("./province.controllers");
const RoomController = require("./room.controllers");

module.exports = {
  UserController,
  RolesController,
  StatusController,
  ReceptionPlaceController,
  AdoptionPlaceController,
  ProvinceController,
  RoomController,
  AssetsController
};
