
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// IdentityProvider Schema
const IdentityProvidersSchema = new Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
        enum: ['ADMINUI', 'S2S', 'FRONTEND'],
    },
    serviceProvider: {
        type: String,
        enum: ['awscognito'],
    },
    identityProvider: {
        type: String,
    },
    userPool: {
        type: String,
        required: false
    },
    clientId: {
        type: String,
        unique: true
    },
    clientSecret: {
        type: String
    },
    baseUrl: {
        type: String,
    },
    tokenUrl: {
        type: String,
    },
    authorizeUrl: {
        type: String
    },
    jwkUrl: {
        type: String,
        default: 'test'
    },
    claimsUrl: {
        type: String,
        default: 'test'
    },
    scope: {
        type: String,
        default: 'openid'
    },
    responseType: {
        type: String,
        required: false
    },
    status: {
        type: Boolean,
        required: false,
        default: false
    },
}, {
    timestamps: true,
    versionKey: false,
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

module.exports = mongoose.model('identity_providers', IdentityProvidersSchema);

