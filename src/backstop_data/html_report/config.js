report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_index_0_document_0_phone.png",
        "test": "../bitmaps_test/20190125-095215/backstop_default_index_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_index_0_document_0_phone.png",
        "label": "index",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/index.html",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 2
          },
          "misMatchPercentage": "15.24",
          "analysisTime": 14
        },
        "diffImage": "../bitmaps_test/20190125-095215/failed_diff_backstop_default_index_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_index_0_document_1_web.png",
        "test": "../bitmaps_test/20190125-095215/backstop_default_index_0_document_1_web.png",
        "selector": "document",
        "fileName": "backstop_default_index_0_document_1_web.png",
        "label": "index",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/index.html",
        "expect": 0,
        "viewportLabel": "web",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.88",
          "analysisTime": 26
        },
        "diffImage": "../bitmaps_test/20190125-095215/failed_diff_backstop_default_index_0_document_1_web.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_test_0_document_0_phone.png",
        "test": "../bitmaps_test/20190125-095215/backstop_default_test_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_default_test_0_document_0_phone.png",
        "label": "test",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/test.html",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "4.34",
          "analysisTime": 15
        },
        "diffImage": "../bitmaps_test/20190125-095215/failed_diff_backstop_default_test_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_test_0_document_1_web.png",
        "test": "../bitmaps_test/20190125-095215/backstop_default_test_0_document_1_web.png",
        "selector": "document",
        "fileName": "backstop_default_test_0_document_1_web.png",
        "label": "test",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3000/test.html",
        "expect": 0,
        "viewportLabel": "web",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.10",
          "analysisTime": 22
        },
        "diffImage": "../bitmaps_test/20190125-095215/failed_diff_backstop_default_test_0_document_1_web.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});