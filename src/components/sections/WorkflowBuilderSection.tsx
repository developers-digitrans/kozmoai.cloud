import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface WorkflowBuilderSectionProps {
  title?: string;
  subtitle?: string;
}

export default function WorkflowBuilderSection(
  props: WorkflowBuilderSectionProps,
) {
  const title = props.title || "Drag. Drop. Deploy.";
  const subtitle =
    props.subtitle ||
    "Don't let boilerplate code slow you down. Visual data flows, reusable components, and rapid iteration let you focus on creating AI magic.";

  // State for dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  // Agent data with extended documentation
  const agents: Agent[] = [
    {
      name: "Basic Agent",
      description: "A simple agent for handling basic conversational tasks.",
      documentation: `# Basic Agent

The Basic Agent is a foundational component designed for straightforward conversational AI applications. It provides a simple yet effective framework for handling user queries and generating appropriate responses.

## Key Features

- **Simple Setup**: Easy to configure with minimal parameters
- **Flexible Integration**: Works with various LLM providers including OpenAI, Anthropic, and Mistral
- **Memory Management**: Basic conversation history tracking
- **Customizable Responses**: Adjustable response formats and styles

## Use Cases

- Customer service chatbots
- Information retrieval assistants
- Simple Q&A applications
- Guided user interactions

## Implementation Example

\`\`\`
let agent = BasicAgent(
    model="gpt-4",
    temperature=0.7,
    system_prompt="You are a helpful assistant that provides clear and concise information."
)

let response = agent.run("Tell me about artificial intelligence.")
console.log(response)
\`\`\`

The Basic Agent serves as an excellent starting point for those new to KozmoAI or for projects that don't require complex agent behaviors.`,
      icon: "🤖",
    },
    {
      name: "Basic Prompting",
      description: "Techniques for crafting effective prompts for LLMs.",
      documentation: `# Basic Prompting

The Basic Prompting component provides a structured approach to creating effective prompts for large language models. It helps you design prompts that elicit the desired responses from AI models.

## Key Features

- **Template System**: Create reusable prompt templates with variable substitution
- **Context Management**: Efficiently handle context windows and token limitations
- **Prompt Chaining**: Connect multiple prompts in sequence for complex tasks
- **Formatting Controls**: Apply consistent formatting across all prompts

## Best Practices

1. **Be Specific**: Clearly state what you want the model to do
2. **Provide Examples**: Include examples of desired outputs when possible
3. **Set Constraints**: Define boundaries for the response (length, format, etc.)
4. **Use Role-Based Prompting**: Assign specific roles to guide model behavior

## Implementation Example

\`\`\`
let template = PromptTemplate(
    "You are a {role}. Please provide {output_type} about {topic}. Keep your response {tone} and under {max_length} words."
)

let prompt = template.format({
    role: "financial advisor",
    output_type: "advice",
    topic: "retirement planning",
    tone: "professional",
    max_length: 200
})

// Use this prompt with any LLM component
\`\`\`

Effective prompting is fundamental to getting the best results from language models, and this component helps streamline that process.`,
      icon: "📝",
    },
    {
      name: "Doc Assistant",
      description:
        "A RAG-powered chatbot that retrieves specific information from documents.",
      documentation: `# Document Assistant

The Document Assistant is a sophisticated Retrieval Augmented Generation (RAG) system designed to provide accurate, document-grounded responses to user queries. It combines the power of vector search with language model generation.

## Key Features

- **Document Ingestion**: Process and index various document formats (PDF, DOCX, TXT, HTML)
- **Semantic Search**: Find relevant information based on meaning, not just keywords
- **Source Attribution**: Responses include references to source documents
- **Context Optimization**: Intelligent selection of relevant context to maximize accuracy
- **Follow-up Handling**: Maintains conversation context for multi-turn interactions

## Architecture

1. **Document Processing Pipeline**: Chunking, cleaning, and embedding generation
2. **Vector Store Integration**: Compatible with Pinecone, Weaviate, Qdrant, and more
3. **Retrieval Module**: Semantic search with relevance filtering
4. **Generation Layer**: Contextual response generation with source grounding

## Implementation Example

\`\`\`
// Load and process documents
let loader = DocumentLoader()
let docs = loader.load("path/to/documents/")

// Create and configure the assistant
let assistant = DocAssistant({
    documents: docs,
    vector_store: "pinecone",
    embedding_model: "text-embedding-3-large",
    llm_model: "gpt-4",
    chunk_size: 500,
    chunk_overlap: 50
})

// Query the assistant
let response = assistant.query("What are the key financial projections for Q3?")
console.log(response.answer)  // The generated answer
console.log(response.sources)  // The source documents used
\`\`\`

The Document Assistant is ideal for creating knowledge bases, support systems, and research assistants that require accurate information retrieval from large document collections.`,
      icon: "📄",
    },
    {
      name: "OpenAI Integration",
      description: "Connect to OpenAI's models for powerful AI capabilities.",
      documentation: `# OpenAI Integration

The OpenAI Integration component provides seamless access to OpenAI's suite of language models, including GPT-4, GPT-3.5, and their specialized variants. This integration enables you to leverage state-of-the-art AI capabilities within your KozmoAI workflows.

## Supported Models

- **GPT-4 Series**: GPT-4, GPT-4 Turbo, GPT-4o
- **GPT-3.5 Series**: GPT-3.5 Turbo
- **Embedding Models**: text-embedding-3-large, text-embedding-3-small
- **Vision Models**: GPT-4 Vision
- **Audio Models**: Whisper

## Key Features

- **API Key Management**: Secure handling of authentication credentials
- **Request Optimization**: Automatic batching and rate limiting
- **Parameter Controls**: Fine-grained control over temperature, top_p, frequency penalty, etc.
- **Response Streaming**: Support for streaming responses for real-time applications
- **Function Calling**: Utilize OpenAI's function calling capabilities

## Configuration Options

\`\`\`
// Basic configuration
let openai = OpenAIConnection({
    api_key: "your_api_key",  // Can also be loaded from environment variables
    organization_id: "your_org_id",  // Optional
    default_model: "gpt-4o",
    request_timeout: 60
})

// Advanced configuration
let openai_advanced = OpenAIConnection({
    api_key: "your_api_key",
    default_model: "gpt-4",
    max_retries: 3,
    retry_delay: 2,
    proxy_url: "http://your-proxy.com",
    custom_headers: {"X-Custom-Header": "value"},
    log_level: "INFO"
})
\`\`\`

## Usage Examples

\`\`\`
// Simple completion
let response = openai.complete("Explain quantum computing in simple terms")

// Chat completion with history
response = openai.chat_complete([
    {role: "system", content: "You are a helpful assistant."},
    {role: "user", content: "What is machine learning?"}
])

// Function calling
response = openai.function_call({
    messages: [{role: "user", content: "What's the weather in New York?"}],
    functions: [{
        name: "get_weather",
        description: "Get the current weather in a location",
        parameters: {
            type: "object",
            properties: {
                location: {type: "string", description: "The city and state"}
            },
            required: ["location"]
        }
    }]
})
\`\`\`

The OpenAI Integration is a fundamental component for many KozmoAI workflows, providing access to some of the most powerful AI models available.`,
      icon: "🔄",
    },
  ];

  // Function to open dialog with selected agent
  const openAgentDialog = (agent: Agent) => {
    setSelectedAgent(agent);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-black relative z-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Arcade Demo Section */}
        <div className="mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#111111] rounded-xl border border-purple-500/20 overflow-hidden shadow-lg shadow-purple-500/10">
              <div className="bg-[#1A1A1A] p-3 border-b border-gray-800 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-sm">Interactive Demo</div>
                <div className="w-16"></div> {/* Empty div for spacing */}
              </div>
              <div
                className="h-[600px] overflow-hidden rounded-b-xl cursor-pointer transition-all duration-300 transform hover:scale-105 relative bg-gradient-to-br from-[#0D1117] to-[#1A1A1A] flex flex-col items-center justify-center"
                onClick={() =>
                  window.open(
                    "https://app.arcade.software/share/kozmoai-demo",
                    "_blank",
                  )
                }
              >
                {/* Arcade Logo */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 flex items-center justify-center pointer-events-none">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="#9333EA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="#9333EA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="#9333EA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="z-10 text-center px-8">
                  <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 7.5V6.75C21 5.50736 19.9926 4.5 18.75 4.5H5.25C4.00736 4.5 3 5.50736 3 6.75V17.25C3 18.4926 4.00736 19.5 5.25 19.5H18.75C19.9926 19.5 21 18.4926 21 17.25V16.5"
                        stroke="#9333EA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 12L9 8.25V15.75L15 12Z"
                        stroke="#9333EA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Interactive Product Demo
                  </h3>
                  <p className="text-gray-300 mb-8 max-w-lg">
                    Experience KozmoAI's workflow builder with this interactive
                    demo. Click through the interface and see how easy it is to
                    create powerful AI workflows.
                  </p>
                  <div className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300">
                    <span>Launch Interactive Demo</span>
                    <svg
                      className="ml-2 -mr-1 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* Animated Elements */}
                <div className="absolute bottom-6 right-6 animate-pulse">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
                <div
                  className="absolute top-12 left-12 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                </div>
                <div
                  className="absolute top-1/4 right-1/4 animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect your existing tools Section */}
        <div className="mb-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Connect your existing tools
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Choose from hundreds of data sources, models, or vector stores. If
              you don't find what your looking for, build your own custom
              component.
            </motion.p>

            {/* First row - left to right */}
            <div className="relative overflow-hidden h-14 mb-2">
              <motion.div
                className="flex gap-4 absolute whitespace-nowrap"
                initial={{ x: 0 }}
                animate={{ x: -3000 }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: "linear",
                  repeatType: "loop",
                }}
              >
                {[
                  { name: "SearXNG", icon: "🔍" },
                  { name: "OpenAI", icon: "🧠" },
                  { name: "Zep", icon: "⚡" },
                  { name: "Firecrawl", icon: "🔥" },
                  { name: "Upstash", icon: "📊" },
                  { name: "Unstructured", icon: "📄" },
                  { name: "Groq", icon: "🚀" },
                  { name: "Composio", icon: "⚙️" },
                  { name: "Notion", icon: "📝" },
                  { name: "SearXNG", icon: "🔍" },
                  { name: "OpenAI", icon: "🧠" },
                  { name: "Zep", icon: "⚡" },
                  { name: "Firecrawl", icon: "🔥" },
                  { name: "Upstash", icon: "📊" },
                  { name: "Unstructured", icon: "📄" },
                  { name: "Groq", icon: "🚀" },
                  { name: "Composio", icon: "⚙️" },
                  { name: "Notion", icon: "📝" },
                  { name: "SearXNG", icon: "🔍" },
                  { name: "OpenAI", icon: "🧠" },
                  { name: "Zep", icon: "⚡" },
                  { name: "Firecrawl", icon: "🔥" },
                  { name: "Upstash", icon: "📊" },
                  { name: "Unstructured", icon: "📄" },
                  { name: "Groq", icon: "🚀" },
                  { name: "Composio", icon: "⚙️" },
                  { name: "Notion", icon: "📝" },
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#111111] rounded-full border border-purple-500/20 px-4 py-2 flex items-center hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                    animate={{
                      y: [0, -5, 0],
                      boxShadow: [
                        "0 2px 4px -1px rgba(139, 92, 246, 0.1)",
                        "0 4px 6px -1px rgba(139, 92, 246, 0.2)",
                        "0 2px 4px -1px rgba(139, 92, 246, 0.1)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <span className="mr-2">{tool.icon}</span>
                    <span className="text-white text-sm">{tool.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Second row - right to left */}
            <div className="relative overflow-hidden h-14 mb-2">
              <motion.div
                className="flex gap-4 absolute whitespace-nowrap"
                initial={{ x: -3000 }}
                animate={{ x: 0 }}
                transition={{
                  repeat: Infinity,
                  duration: 40,
                  ease: "linear",
                  repeatType: "loop",
                }}
              >
                {[
                  { name: "Anthropic", icon: "🤖" },
                  { name: "Github", icon: "🐙" },
                  { name: "MeriTalk", icon: "💬" },
                  { name: "Qdrant", icon: "🔮" },
                  { name: "Mistral", icon: "🌪️" },
                  { name: "Clickhouse", icon: "🏠" },
                  { name: "DuckDuckGo", icon: "🦆" },
                  { name: "Serper", icon: "🔎" },
                  { name: "Cohere", icon: "🧩" },
                  { name: "Anthropic", icon: "🤖" },
                  { name: "Github", icon: "🐙" },
                  { name: "MeriTalk", icon: "💬" },
                  { name: "Qdrant", icon: "🔮" },
                  { name: "Mistral", icon: "🌪️" },
                  { name: "Clickhouse", icon: "🏠" },
                  { name: "DuckDuckGo", icon: "🦆" },
                  { name: "Serper", icon: "🔎" },
                  { name: "Cohere", icon: "🧩" },
                  { name: "Anthropic", icon: "🤖" },
                  { name: "Github", icon: "🐙" },
                  { name: "MeriTalk", icon: "💬" },
                  { name: "Qdrant", icon: "🔮" },
                  { name: "Mistral", icon: "🌪️" },
                  { name: "Clickhouse", icon: "🏠" },
                  { name: "DuckDuckGo", icon: "🦆" },
                  { name: "Serper", icon: "🔎" },
                  { name: "Cohere", icon: "🧩" },
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#111111] rounded-full border border-purple-500/20 px-4 py-2 flex items-center hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                    animate={{
                      y: [0, -5, 0],
                      boxShadow: [
                        "0 2px 4px -1px rgba(139, 92, 246, 0.1)",
                        "0 4px 6px -1px rgba(139, 92, 246, 0.2)",
                        "0 2px 4px -1px rgba(139, 92, 246, 0.1)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <span className="mr-2">{tool.icon}</span>
                    <span className="text-white text-sm">{tool.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Run, Share, and Collaborate Section */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Run, Share, and Collaborate.
          </motion.h3>
          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose from hundreds of pre-built flows and components
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Agent Cards */}
            {agents.map((agent, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${index === 1 ? "from-pink-600/20 to-purple-500/20 border-pink-500/30" : "from-purple-900/10 to-purple-500/10 border-purple-500/20"} rounded-xl border p-4 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer`}
                animate={{
                  y: [0, -8, 0],
                  boxShadow: [
                    "0 4px 6px -1px rgba(139, 92, 246, 0.1)",
                    "0 10px 15px -3px rgba(139, 92, 246, 0.2)",
                    "0 4px 6px -1px rgba(139, 92, 246, 0.1)",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                onClick={() => openAgentDialog(agent)}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-purple-900/20 w-8 h-8 rounded-full flex items-center justify-center mr-2">
                    {agent.icon ? (
                      <span className="text-lg">{agent.icon}</span>
                    ) : (
                      <svg
                        className="w-4 h-4 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {agent.name}
                  </h4>
                </div>
                {agent.description && (
                  <p className="text-gray-300 text-sm">{agent.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Agent Documentation Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-[#111111] border border-purple-500/30 text-white max-w-4xl max-h-[80vh] overflow-y-auto">
            {selectedAgent && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                    <span className="text-xl">{selectedAgent.icon}</span>
                    {selectedAgent.name}
                  </DialogTitle>
                  <DialogDescription className="text-gray-300 text-base mt-2">
                    {selectedAgent.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 prose prose-invert max-w-none">
                  <div className="bg-[#0D0D0D] p-6 rounded-lg border border-purple-500/20 whitespace-pre-line">
                    {selectedAgent.documentation.split("```").map((part, i) => {
                      // If it's an even index, it's normal text
                      if (i % 2 === 0) {
                        return (
                          <div key={i} className="mb-4">
                            {part.split("\n\n").map((paragraph, j) => {
                              if (paragraph.startsWith("#")) {
                                // It's a heading
                                const level = paragraph.match(/^#+/)[0].length;
                                const text = paragraph.replace(/^#+\s*/, "");
                                if (level === 1) {
                                  return (
                                    <h2
                                      key={j}
                                      className="text-2xl font-bold text-white mb-4"
                                    >
                                      {text}
                                    </h2>
                                  );
                                } else if (level === 2) {
                                  return (
                                    <h3
                                      key={j}
                                      className="text-xl font-semibold text-white mb-3"
                                    >
                                      {text}
                                    </h3>
                                  );
                                } else {
                                  return (
                                    <h4
                                      key={j}
                                      className="text-lg font-medium text-white mb-2"
                                    >
                                      {text}
                                    </h4>
                                  );
                                }
                              } else if (paragraph.startsWith("- ")) {
                                // It's a list
                                return (
                                  <ul
                                    key={j}
                                    className="list-disc pl-5 mb-4 text-gray-300"
                                  >
                                    {paragraph.split("\n").map((item, k) => (
                                      <li key={k} className="mb-1">
                                        {item.replace(/^-\s*/, "")}
                                      </li>
                                    ))}
                                  </ul>
                                );
                              } else if (paragraph.startsWith("1. ")) {
                                // It's a numbered list
                                return (
                                  <ol
                                    key={j}
                                    className="list-decimal pl-5 mb-4 text-gray-300"
                                  >
                                    {paragraph.split("\n").map((item, k) => {
                                      const match = item.match(/^\d+\.\s*(.*)/);
                                      return match ? (
                                        <li key={k} className="mb-1">
                                          {match[1]}
                                        </li>
                                      ) : null;
                                    })}
                                  </ol>
                                );
                              } else {
                                // Regular paragraph
                                return (
                                  <p key={j} className="text-gray-300 mb-4">
                                    {paragraph}
                                  </p>
                                );
                              }
                            })}
                          </div>
                        );
                      } else {
                        // It's a code block
                        const [language, ...codeLines] = part.split("\n");
                        return (
                          <div key={i} className="mb-6">
                            <div className="bg-[#1A1A1A] rounded-t-md px-4 py-2 text-sm text-gray-400 border-t border-l border-r border-purple-500/20">
                              {language || "Code"}
                            </div>
                            <pre className="bg-[#0A0A0A] p-4 rounded-b-md overflow-x-auto border-l border-r border-b border-purple-500/20">
                              <code className="text-gray-300 text-sm font-mono">
                                {codeLines.join("\n")}
                              </code>
                            </pre>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>

                <DialogFooter className="mt-6">
                  <Button
                    onClick={() => setIsDialogOpen(false)}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white border-none"
                  >
                    Close
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

// Agent interface
interface Agent {
  name: string;
  description: string;
  documentation: string;
  icon?: string;
}
