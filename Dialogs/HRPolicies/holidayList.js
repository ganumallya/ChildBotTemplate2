
module.exports = function returnJSON(callback){
    var jsonnn = {
      "contentType": "application/vnd.microsoft.card.adaptive",
      "content": {
          "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
          "type": "AdaptiveCard",
          "version": "1.0",
          "body": [{
              "type": "Container",
              "speak": "Please find the Holiday List Below :",
              "items": [{
                  "type": "ColumnSet",
                  "columns": [{
                      "type": "Column",
                      "size": "stretch",
                      "items": [{
                          "type": "TextBlock",
                          "text": "Sr. No."
                          }]
                      }, {
                          "type": "Column",
                          "size": "stretch",
                          "items": [{
                              "type": "TextBlock",
                              "text": "Date"
                          }]
                      }, {
                        "type": "Column",
                        "size": "stretch",
                        "items": [{
                            "type": "TextBlock",
                            "text": "Holiday Name"
                        }]
                    }, {
                            "type": "Column",
                            "size": "stretch",
                            "items": [{
                                "type": "TextBlock",
                                "text": "Day"
                            }]
                        }]
                    
                  }, {
                    "type": "ColumnSet",
                    "columns": [{
                        "type": "Column",
                        "size": "stretch",
                        "items": [{
                            "type": "TextBlock",
                            "text": "1"
                            }]
                        }, {
                            "type": "Column",
                            "size": "stretch",
                            "items": [{
                                "type": "TextBlock",
                                "text": "26 Jan 2018"
                            }]
                        }, {
                          "type": "Column",
                          "size": "stretch",
                          "items": [{
                              "type": "TextBlock",
                              "text": "Republic Day"
                          }]
                        }, {
                              "type": "Column",
                              "size": "stretch",
                              "items": [{
                                  "type": "TextBlock",
                                  "text": "Friday"
                              }]
                          }]
                    }, {
                        "type": "ColumnSet",
                        "columns": [{
                            "type": "Column",
                            "size": "stretch",
                            "items": [{
                                "type": "TextBlock",
                                "text": "2"
                                }]
                            }, {
                                "type": "Column",
                                "size": "stretch",
                                "items": [{
                                    "type": "TextBlock",
                                    "text": "01 May 2018"
                                }]
                            }, {
                              "type": "Column",
                              "size": "stretch",
                              "items": [{
                                  "type": "TextBlock",
                                  "text": "May Day"
                              }]
                            }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Tuesday"
                                  }]
                              }]
                        }, {
                            "type": "ColumnSet",
                            "columns": [{
                                "type": "Column",
                                "size": "stretch",
                                "items": [{
                                    "type": "TextBlock",
                                    "text": "3"
                                    }]
                                }, {
                                    "type": "Column",
                                    "size": "stretch",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "15 Aug 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Independence Day"
                                  }]
                                }, {
                                      "type": "Column",
                                      "size": "stretch",
                                      "items": [{
                                          "type": "TextBlock",
                                          "text": "Wednesday"
                                      }]
                                  }]
                        }, {
                            "type": "ColumnSet",
                            "columns": [{
                                "type": "Column",
                                "size": "stretch",
                                "items": [{
                                    "type": "TextBlock",
                                    "text": "4"
                                    }]
                                }, {
                                    "type": "Column",
                                    "size": "stretch",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "02 Oct 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Mahatma Gandhi Jayanti"
                                  }]
                                }, {
                                      "type": "Column",
                                      "size": "stretch",
                                      "items": [{
                                          "type": "TextBlock",
                                          "text": "Tuesday"
                                      }]
                                  }]
                        }, {
                            "type": "ColumnSet",
                            "columns": [{
                                "type": "Column",
                                "size": "stretch",
                                "items": [{
                                    "type": "TextBlock",
                                    "text": "5"
                                    }]
                                }, {
                                    "type": "Column",
                                    "size": "stretch",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "19 Oct 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Vijayadashami"
                                  }]
                                }, {
                                      "type": "Column",
                                      "size": "stretch",
                                      "items": [{
                                          "type": "TextBlock",
                                          "text": "Friday"
                                      }]
                                  }]
                        }, {
                            "type": "ColumnSet",
                            "columns": [{
                                "type": "Column",
                                "size": "stretch",
                                "items": [{
                                    "type": "TextBlock",
                                    "text": "6"
                                    }]
                                }, {
                                    "type": "Column",
                                    "size": "stretch",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "01 Nov 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Kannada Rajyotsava"
                                  }]
                                }, {
                                      "type": "Column",
                                      "size": "stretch",
                                      "items": [{
                                          "type": "TextBlock",
                                          "text": "Thursday"
                                      }]
                                  }]
                        }, {
                            "type": "ColumnSet",
                            "columns": [{
                                "type": "Column",
                                "size": "stretch",
                                "items": [{
                                    "type": "TextBlock",
                                    "text": "7"
                                    }]
                                }, {
                                    "type": "Column",
                                    "size": "stretch",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "06 Nov 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Naraka Chaturdashi"
                                  }]
                                }, {
                                      "type": "Column",
                                      "size": "stretch",
                                      "items": [{
                                          "type": "TextBlock",
                                          "text": "Tuesday"
                                      }]
                                  }]
                        }, {
                            "type": "ColumnSet",
                            "columns": [{
                                "type": "Column",
                                "size": "stretch",
                                "items": [{
                                    "type": "TextBlock",
                                    "text": "8"
                                    }]
                                }, {
                                    "type": "Column",
                                    "size": "stretch",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "25 Dec 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Christmas"
                                  }]
                                }, {
                                      "type": "Column",
                                      "size": "stretch",
                                      "items": [{
                                          "type": "TextBlock",
                                          "text": "Tuesday"
                                      }]
                              }]
                        }]
              }]
          }
      };
      callback(jsonnn);
  }
