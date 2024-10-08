import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  model: { type: String, default: "mythomax-l2-13b" },
  provider: { type: String, default: "gryphe" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const conversationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  agentId: { type: String },
  id: {type: String, unique: true},
  title: { type: String },
  createdAt: { type: Date, default: Date.now },
  messages: [messageSchema]
});

export default mongoose.model("conversation", conversationSchema);
