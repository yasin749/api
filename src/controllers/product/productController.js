/* Databases */
const database = require('../../database');

/* Response */
const response = require('../../common/response/response');

/* Utils */
const {imageFullPathUnifyer} = require('./../image/imageUtils');

module.exports = {
  productDetail: async function (req, res, next) {
    const productId = parseInt(req.params.productId);

    const getEvaluationCountQuery = function (value) {
      return `COUNT(case "evaluationGroup->evaluationAttributes->evaluations"."evaluation" when ${value} then 1 else null end)`
    }

    const product = await database.models.Product.findOne({
      where: {id: productId},
      include: [
        {
          model: database.models.Category,
          as: 'category',
        },
        {
          model: database.models.Gallery,
          as: 'coverGallery',
          include: [
            {
              model: database.models.Image,
              as: 'images',
              through: {
                attributes: []
              },
              attributes: {
                include: [
                  imageFullPathUnifyer(database, 'coverGallery.images.path'),
                ],
              },
            },
          ],
          required: false,
        },
        {
          model: database.models.Gallery,
          as: 'contentGallery',
          include: [
            {
              model: database.models.Image,
              as: 'images',
              through: {
                attributes: []
              },
              attributes: {
                include: [
                  imageFullPathUnifyer(database, 'contentGallery.images.path'),
                ],
              },
            },
          ],
          required: false,
        },
        {
          model: database.models.EvaluationGroup,
          as: 'evaluationGroup',
          include: {
            model: database.models.EvaluationAttribute,
            as: 'evaluationAttributes',
            attributes: {
              include: [
                [
                  database.literal(getEvaluationCountQuery(1)),
                  'upVote'
                ],
                [
                  database.literal(getEvaluationCountQuery(0)),
                  'downVote'
                ],
              ]
            },
            through: {
              attributes: []
            },
            include: {
              model: database.models.Evaluation,
              as: 'evaluations',
              where: {productId: productId},
              attributes: [],
              required: false,
            },
          }
        },
      ],
      group: [
        'Product.id',
        'category.id',
        'coverGallery.id',
        'coverGallery->images.id',
        'contentGallery.id',
        'contentGallery->images.id',
        'evaluationGroup.id',
        'evaluationGroup->evaluationAttributes.id'
      ],
    });

    if (product) {
      response.ok(res, product);
    } else {
      response.error(res);
    }
  },
};
