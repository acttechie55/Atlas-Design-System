import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atlas-spacing',
  templateUrl: './atlas-spacing.component.html',
  styleUrls: ['./atlas-spacing.component.scss']
})
export class AtlasSpacingComponent implements OnInit {

  leftCurlyBraces: string = "{{";
  rightCurlyBraces: string = "}}";
  listVariables = [
    {
      name: "$atlas-spacing-base-0",
      value: "0 rem/0 px"
    },
    {
      name: "$atlas-spacing-base-quarter",
      value: "0.25 rem/4 px"
    },
    {
      name: "$atlas-spacing-base-half",
      value: "0.5 rem/8 px"
    },
    {
      name: "$atlas-spacing-base-three-quarters",
      value: "0.75 rem/12 px"
    },
    {
      name: "$atlas-spacing-base",
      value: "1 rem/16 px"
    },
    {
      name: "$atlas-spacing-base-one-quarter",
      value: "1.25 rem/20 px"
    },
    {
      name: "$atlas-spacing-base-one-half",
      value: "1.5 rem/24 px"
    },
    {
      name: "$atlas-spacing-base-one-three-quarters",
      value: "1.75 rem/28 px"
    },
    {
      name: "$atlas-spacing-base-two",
      value: "2 rem/32 px"
    },
    {
      name: "$atlas-spacing-base-two-quarter",
      value: "2.25 rem/36 px"
    },
    {
      name: "$atlas-spacing-base-two-half",
      value: "2.5 rem/40 px"
    },
    {
      name: "$atlas-spacing-base-two-three-quarters",
      value: "2.75 rem/44 px"
    },
    {
      name: "$atlas-spacing-base-three",
      value: "3 rem/48 px"
    },
    {
      name: "$atlas-spacing-base-three-quarter",
      value: "3.25 rem/52 px"
    },
    {
      name: "$atlas-spacing-base-three-half",
      value: "3.5 rem/56 px"
    },
    {
      name: "$atlas-spacing-base-three-three-quarters",
      value: "3.75 rem/60 px"
    },
    {
      name: "$atlas-spacing-base-four",
      value: "4 rem/64 px"
    }
  ]
  listDirections = [
    {
      abbreviation: "t",
      className1: "margin-top",
      className2: "padding-top",
      conjunction: "or"
    },
    {
      abbreviation: "b",
      className1: "margin-bottom",
      className2: "padding-bottom",
      conjunction: "or"
    },
    {
      abbreviation: "l",
      className1: "margin-left",
      className2: "padding-left",
      conjunction: "or"
    },
    {
      abbreviation: "r",
      className1: "margin-right",
      className2: "padding-right",
      conjunction: "or"
    },
    {
      abbreviation: "x",
      className1: "*-left",
      className2: "*-right",
      conjunction: "and"
    },
    {
      abbreviation: "y",
      className1: "*-top",
      className2: "*-bottom",
      conjunction: "and"
    }
  ]

  listSizes = [
    { removeOrSet: "removes", conjunction: "or" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "0.25rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "0.50rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "0.75rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "1.00rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "1.25rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "1.50rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "1.75rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "2.00rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "2.25rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "2.50rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "2.75rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "3.00rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "3.25rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "3.50rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "3.75rem" },
    { removeOrSet: "for classes that set the", conjunction: "or", preposition: "to", variable: "4.00rem" },
  ]

  constructor() { }

  ngOnInit() {
  }

}
