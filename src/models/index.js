const User = require("./users.model");
const Status = require("./status.model");
const Roles = require("./roles.model");
const ReceptionPlace = require("./reception_place.model");
const Assets = require("./assets.model");
const AdoptionPlace = require("./adoption_place.model");
const Province = require("./province.model");
const Room = require("./room.model");
const JobOffers = require("./job_offers.model");
const UnderStatus = require("./under_status.model");
const Events = require("./events.models");
const Books = require("./books.model");
const Message = require("./message.model");

module.exports = { User, Status, Roles, ReceptionPlace, Assets, AdoptionPlace, Province, Room, JobOffers, UnderStatus, Message, Books, Events };
