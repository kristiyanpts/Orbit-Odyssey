const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = Number(process.env.SALTROUNDS) || 5;

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(v);
        },
        message: (props) => `Invalid email format!`,
      },
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "Password should be at least 8 characters"],
      validate: {
        validator: function (v) {
          return /[a-zA-Z0-9]+/g.test(v);
        },
        message: (props) =>
          `${props.value} must contains only latin letters and digits!`,
      },
    },
    firstName: {
      type: String,
      required: true,
      minlength: [1, "First name should be at least 1 characters"],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [1, "Last name should be at least 1 characters"],
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      minlength: [1, "Phone should be at least 1 characters"],
    },
    address: {
      type: String,
      required: true,
      minlength: [1, "Address should be at least 1 characters"],
    },
    role: {
      type: String,
      enum: ["owner", "admin", "user"],
      default: "user",
      required: true,
    },
    trips: [{ type: ObjectId, ref: "Trip", required: true }],
    products: [{ type: ObjectId, ref: "Product", required: true }],
  },
  { timestamps: { createdAt: "created_at" } }
);

userSchema.methods = {
  matchPassword: function (password) {
    return bcrypt.compare(password, this.password);
  },
};

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        next(err);
      }
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          next(err);
        }
        this.password = hash;
        next();
      });
    });
    return;
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
