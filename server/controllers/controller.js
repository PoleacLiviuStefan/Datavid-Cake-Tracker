const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Member = require("../models/Member");

const testController = (req, res) => {
  res.status(201).send("Salutare");
};

const addMember = async (req, res) => {
  const { firstName, lastName, birthDate, country, city } = req.body;

  const age = new Date().getFullYear() - new Date(birthDate).getFullYear();
  if (age < 18) {
    return res.status(400).json({ error: 'Member must be at least 18 years old!' });
  }

  const memberAlreadyExists = await Member.findOne({
    firstName: firstName.toLowerCase(),
    lastName: lastName.toLowerCase(),
    country: country.toLowerCase(),
    city: city.toLowerCase()
  });

  if (memberAlreadyExists) {
    return res.status(400).json({ error: "Member should be unique" });
  }

  const member = new Member({
    firstName: firstName.toLowerCase(),
    lastName: lastName.toLowerCase(),
    birthDate: birthDate,
    country: country.toLowerCase(),
    city: city.toLowerCase()
  });

  await member.save();

  res.status(201).json(member);
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

const formatMember = (member) => {
  return {
    firstName: capitalizeFirstLetter(member.firstName),
    lastName: capitalizeFirstLetter(member.lastName),
    birthDate: member.birthDate,
    country: capitalizeFirstLetter(member.country),
    city: capitalizeFirstLetter(member.city)
  };
};

const showAllMembers = async (req, res) => {
  const members = await Member.find();
  const formattedMembers = members.map(formatMember);
  res.json(formattedMembers);
};

const sortedMembers = async (req, res) => {
  const members = await Member.find();
  members.sort((a, b) => {
    const nextBirthdayA = new Date(a.birthDate);
    nextBirthdayA.setFullYear(new Date().getFullYear());
    if (nextBirthdayA < new Date()) {
      nextBirthdayA.setFullYear(new Date().getFullYear() + 1);
    }

    const nextBirthdayB = new Date(b.birthDate);
    nextBirthdayB.setFullYear(new Date().getFullYear());
    if (nextBirthdayB < new Date()) {
      nextBirthdayB.setFullYear(new Date().getFullYear() + 1);
    }

    return nextBirthdayA - nextBirthdayB;
  });

  const formattedMembers = members.map(formatMember);
  res.json(formattedMembers);
};

module.exports = {
  testController,
  addMember,
  showAllMembers,
  sortedMembers
};
