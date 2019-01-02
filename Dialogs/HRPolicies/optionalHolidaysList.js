
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
                                "text": "15 Jan 2018"
                            }]
                        }, {
                          "type": "Column",
                          "size": "stretch",
                          "items": [{
                              "type": "TextBlock",
                              "text": "Pongal/Sankranthi Festival"
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
                                    "text": "13 Feb 2018"
                                }]
                            }, {
                              "type": "Column",
                              "size": "stretch",
                              "items": [{
                                  "type": "TextBlock",
                                  "text": "Maha Shivaratri"
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
                                        "text": "29 Mar 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Mahaveera Jayanti"
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
                                        "text": "30 Mar 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Good Friday"
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
                                        "text": "18 Apr 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Sri Basava Jayanti"
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
                                        "text": "22 Aug 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Bakraid"
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
                                        "text": "13 Sep 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Ganesh Chaturthi"
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
                                        "text": "21 Sep 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Last Day of Moharram"
                                  }]
                                }]
                        }, {
                            "type": "ColumnSet",
                            "columns": [{
                                "type": "Column",
                                "size": "stretch",
                                "items": [{
                                    "type": "TextBlock",
                                    "text": "9"
                                    }]
                                }, {
                                    "type": "Column",
                                    "size": "stretch",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "08 Oct 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Mahalaya Amavasye"
                                  }]
                                }]
                        }, {
                            "type": "ColumnSet",
                            "columns": [{
                                "type": "Column",
                                "size": "stretch",
                                "items": [{
                                    "type": "TextBlock",
                                    "text": "10"
                                    }]
                                }, {
                                    "type": "Column",
                                    "size": "stretch",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "218 Oct 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Maha Navami Ayudapoja"
                                  }]
                                }]
                        }, {
                            "type": "ColumnSet",
                            "columns": [{
                                "type": "Column",
                                "size": "stretch",
                                "items": [{
                                    "type": "TextBlock",
                                    "text": "11"
                                    }]
                                }, {
                                    "type": "Column",
                                    "size": "stretch",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "24 Oct 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Maharshi Valmiki Jayanti"
                                  }]
                                }]
                        }, {
                            "type": "ColumnSet",
                            "columns": [{
                                "type": "Column",
                                "size": "stretch",
                                "items": [{
                                    "type": "TextBlock",
                                    "text": "12"
                                    }]
                                }, {
                                    "type": "Column",
                                    "size": "stretch",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "08 Nov 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Balipandyami - Deepavali"
                                  }]
                                }]
                        }, {
                            "type": "ColumnSet",
                            "columns": [{
                                "type": "Column",
                                "size": "stretch",
                                "items": [{
                                    "type": "TextBlock",
                                    "text": "13"
                                    }]
                                }, {
                                    "type": "Column",
                                    "size": "stretch",
                                    "items": [{
                                        "type": "TextBlock",
                                        "text": "21 Nov 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Eid - Milad"
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
                                        "text": "26 Nov 2018"
                                    }]
                                }, {
                                  "type": "Column",
                                  "size": "stretch",
                                  "items": [{
                                      "type": "TextBlock",
                                      "text": "Kanakadasa Jayanti"
                                  }]
                                }]
                        }]
              }]
          }
      };
      callback(jsonnn);
  }