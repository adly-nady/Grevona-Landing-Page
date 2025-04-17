import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Copy, ChevronDown } from 'lucide-react';
import { debounce } from 'lodash';

// TypeScript interfaces
interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface Header {
  name: string;
  value: string;
  required: boolean;
}

interface Endpoint {
  method: string;
  path: string;
  description: string;
  parameters?: Parameter[];
  headers?: Header[];
  requestBody?: string;
  response?: { status: string; body: string };
  errorResponse?: { status: string; body: string };
}

interface Section {
  id: string;
  endpoints: Endpoint[];
}

const APIDocumentationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  // Debounced search handler
  const handleSearchInput = debounce((value: string) => {
    setSearchTerm(value.toLowerCase());
  }, 300);

  // Clear search
  const handleClearSearch = (): void => {
    setSearchTerm('');
    const searchInput = document.getElementById('search-input') as HTMLInputElement | null;
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
  };

  // Expand/collapse section
  const handleExpand = (endpointId: string): void => {
    setExpandedSections((prev) => ({
      ...prev,
      [endpointId]: !prev[endpointId],
    }));
  };

  // Copy endpoint to clipboard
  const handleCopy = (endpoint: string): void => {
    navigator.clipboard.writeText(endpoint).then(() => {
      alert(`Endpoint copied: ${endpoint}`);
    });
  };

  // Scroll to bottom
  const handleScrollDown = (): void => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  // Filter endpoints based on search term
  const filterSections = (endpoint: string): boolean => {
    return endpoint.toLowerCase().includes(searchTerm);
  };

  // Parameters Table Component
  const ParametersTable = ({ parameters }: { parameters: Parameter[] }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 backdrop-blur-md bg-[rgba(30,30,50,0.8)] rounded-xl border border-gray-600 shadow-xl"
    >
      <h3 className="bg-[rgba(255,107,107,0.2)] p-3 rounded-t-xl font-semibold text-white">Parameters</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-700/50">
            <th className="p-3 text-left text-gray-200 font-medium">Name</th>
            <th className="p-3 text-left text-gray-200 font-medium">Type</th>
            <th className="p-3 text-left text-gray-200 font-medium">Required</th>
            <th className="p-3 text-left text-gray-200 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((param, index) => (
            <tr
              key={index}
              className="border-t border-gray-600 hover:bg-gray-800/30 transition-colors duration-200"
            >
              <td className="p-3 text-white font-mono">{param.name}</td>
              <td className="p-3 text-white">{param.type}</td>
              <td className="p-3">
                <span className={param.required ? 'text-space-nebula-pink' : 'text-gray-400'}>
                  {param.required ? 'Required' : 'Optional'}
                </span>
              </td>
              <td className="p-3 text-gray-300">{param.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );

  // Headers Table Component
  const HeadersTable = ({ headers }: { headers: Header[] }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 backdrop-blur-md bg-[rgba(30,30,50,0.8)] rounded-xl border border-gray-600 shadow-xl"
    >
      <h3 className="bg-[rgba(255,107,107,0.2)] p-3 rounded-t-xl font-semibold text-white">Request Headers</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-700/50">
            <th className="p-3 text-left text-gray-200 font-medium">Name</th>
            <th className="p-3 text-left text-gray-200 font-medium">Value</th>
            <th className="p-3 text-left text-gray-200 font-medium">Required</th>
          </tr>
        </thead>
        <tbody>
          {headers.map((header, index) => (
            <tr
              key={index}
              className="border-t border-gray-600 hover:bg-gray-800/30 transition-colors duration-200"
            >
              <td className="p-3 text-white font-mono">{header.name}</td>
              <td className="p-3 text-white">{header.value}</td>
              <td className="p-3">
                <span className={header.required ? 'text-space-nebula-pink' : 'text-gray-400'}>
                  {header.required ? 'Required' : 'Optional'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );

  // Request Body Component
  const RequestBody = ({ body }: { body: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 backdrop-blur-md bg-[rgba(30,30,50,0.8)] rounded-xl border border-gray-600 shadow-xl"
    >
      <h3 className="bg-[rgba(255,107,107,0.2)] p-3 rounded-t-xl font-semibold text-white">Request Body</h3>
      <div className="p-3">
        <pre className="text-white font-mono text-sm">{body}</pre>
      </div>
    </motion.div>
  );

  // Response Component
  const Response = ({ status, body }: { status: string; body: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 backdrop-blur-md bg-[rgba(30,30,50,0.8)] rounded-xl border border-gray-600 shadow-xl"
    >
      <h3 className="bg-[rgba(255,107,107,0.2)] p-3 rounded-t-xl font-semibold text-white">Response</h3>
      <div className="p-3">
        <p className="text-gray-200">
          <strong>Status:</strong> <span className="text-space-nebula-pink">{status}</span>
        </p>
        <pre className="text-white font-mono text-sm mt-2">{body}</pre>
      </div>
    </motion.div>
  );

  // Error Response Component
  const ErrorResponse = ({ status, body }: { status: string; body: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 backdrop-blur-md bg-[rgba(30,30,50,0.8)] rounded-xl border border-gray-600 shadow-xl"
    >
      <h3 className="bg-[rgba(255,107,107,0.2)] p-3 rounded-t-xl font-semibold text-white">Error Response</h3>
      <div className="p-3">
        <p className="text-gray-200">
          <strong>Status:</strong> <span className="text-space-nebula-pink">{status}</span>
        </p>
        <pre className="text-white font-mono text-sm mt-2">{body}</pre>
      </div>
    </motion.div>
  );

  // API Sections Data (Updated for Milling Industry)
  const apiSections: Section[] = [
    {
      id: 'all',
      endpoints: [
        {
          method: 'GET',
          path: '/api/milling/users',
          description: 'Retrieves a list of users managing milling operations (e.g., mill operators, admins).',
          parameters: [
            { name: 'page', type: 'integer', required: false, description: 'Page number for pagination' },
            { name: 'limit', type: 'integer', required: false, description: 'Number of users per page' },
            { name: 'role', type: 'string', required: false, description: 'Filter by role (e.g., operator, admin)' },
          ],
          headers: [
            { name: 'Authorization', value: `Bearer {token}`, required: true },
          ],
          response: {
            status: '200 OK',
            body: `[
              {
                "id": 1,
                "name": "John Doe",
                "email": "john@milling.com",
                "role": "operator",
                "created_at": "2025-01-01T12:00:00Z"
              },
              {
                "id": 2,
                "name": "Jane Smith",
                "email": "jane@milling.com",
                "role": "admin",
                "created_at": "2025-01-02T12:00:00Z"
              }
            ]`,
          },
          errorResponse: {
            status: '401 Unauthorized',
            body: `{
              "error": "Invalid token"
            }`,
          },
        },
      ],
    },
    {
      id: 'inventory',
      endpoints: [
        {
          method: 'GET',
          path: '/api/milling/inventory',
          description: 'Fetches inventory details for raw materials (e.g., wheat, corn) and finished products (e.g., flour).',
          parameters: [
            { name: 'type', type: 'string', required: false, description: 'Filter by type (raw, finished)' },
            { name: 'limit', type: 'integer', required: false, description: 'Number of items per page' },
          ],
          headers: [
            { name: 'Authorization', value: `Bearer {token}`, required: true },
          ],
          response: {
            status: '200 OK',
            body: `[
              {
                "id": 1,
                "name": "Wheat",
                "type": "raw",
                "quantity": 5000,
                "unit": "kg"
              },
              {
                "id": 2,
                "name": "Whole Wheat Flour",
                "type": "finished",
                "quantity": 2000,
                "unit": "kg"
              }
            ]`,
          },
          errorResponse: {
            status: '403 Forbidden',
            body: `{
              "error": "Access denied"
            }`,
          },
        },
      ],
    },
    {
      id: 'production',
      endpoints: [
        {
          method: 'POST',
          path: '/api/milling/production',
          description: 'Initiates a milling production batch, converting raw materials to finished products.',
          parameters: [
            { name: 'batch_id', type: 'string', required: true, description: 'Unique batch identifier' },
            { name: 'material_id', type: 'integer', required: true, description: 'ID of raw material' },
            { name: 'quantity', type: 'integer', required: true, description: 'Quantity to process (kg)' },
          ],
          headers: [
            { name: 'Authorization', value: `Bearer {token}`, required: true },
            { name: 'Content-Type', value: 'application/json', required: true },
          ],
          requestBody: `{
            "batch_id": "BATCH2025-001",
            "material_id": 1,
            "quantity": 1000
          }`,
          response: {
            status: '201 Created',
            body: `{
              "batch_id": "BATCH2025-001",
              "status": "initiated",
              "output_product": "Whole Wheat Flour",
              "output_quantity": 950
            }`,
          },
          errorResponse: {
            status: '400 Bad Request',
            body: `{
              "error": "Invalid material ID"
            }`,
          },
        },
      ],
    },
    {
      id: 'authentication',
      endpoints: [
        {
          method: 'POST',
          path: '/api/auth/login',
          description: 'Authenticates a user and returns a JWT token for milling ERP access.',
          parameters: [
            { name: 'email', type: 'string', required: true, description: "User's email address" },
            { name: 'password', type: 'string', required: true, description: "User's password" },
          ],
          headers: [
            { name: 'Content-Type', value: 'application/json', required: true },
          ],
          requestBody: `{
            "email": "user@milling.com",
            "password": "securepassword"
          }`,
          response: {
            status: '200 OK',
            body: `{
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
              "user": {
                "id": 1,
                "email": "user@milling.com",
                "role": "admin"
              }
            }`,
          },
          errorResponse: {
            status: '401 Unauthorized',
            body: `{
              "error": "Invalid credentials"
            }`,
          },
        },
      ],
    },
    {
      id: 'orders',
      endpoints: [
        {
          method: 'GET',
          path: '/api/milling/orders',
          description: 'Retrieves a list of customer orders for milled products.',
          parameters: [
            { name: 'status', type: 'string', required: false, description: 'Filter by status (e.g., pending, shipped)' },
            { name: 'customer_id', type: 'integer', required: false, description: 'Filter by customer ID' },
          ],
          headers: [
            { name: 'Authorization', value: `Bearer {token}`, required: true },
          ],
          response: {
            status: '200 OK',
            body: `[
              {
                "id": 1,
                "customer_id": 101,
                "status": "pending",
                "total": 1500.00,
                "created_at": "2025-01-01T12:00:00Z"
              },
              {
                "id": 2,
                "customer_id": 102,
                "status": "shipped",
                "total": 800.00,
                "created_at": "2025-01-02T12:00:00Z"
              }
            ]`,
          },
          errorResponse: {
            status: '403 Forbidden',
            body: `{
              "error": "Access denied"
            }`,
          },
        },
      ],
    },
  ];

  return (
    <section
      id="api"
      className="py-20 relative z-10 bg-transparent" // No background
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-space-nebula-pink mb-4">
            Grevona Cloud API Documentation
          </h2>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            Grevona Cloud is a cutting-edge ERP solution for the milling industry, enabling seamless management of
            inventory, production, and orders through our powerful API.
          </p>
        </motion.div>

        {/* Getting Started */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="backdrop-blur-md bg-[rgba(30,30,50,0.8)] rounded-xl p-6 mb-12 border border-gray-600 shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-space-light-purple mb-4">Getting Started</h3>
          <p className="text-gray-200 mb-4">
            The Grevona Cloud API is a RESTful interface for milling ERP integration. Start with these essentials:
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>
              <strong>Base URL:</strong>{' '}
              <code className="text-space-nebula-pink font-mono">https://graduation.knowhow-solution.com</code>
            </li>
            <li>
              <strong>Authentication:</strong> Bearer token (JWT) required for most endpoints.
            </li>
            <li>
              <strong>Rate Limits:</strong> 1000 requests per minute per user.
            </li>
          </ul>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-8"
        >
          <div className="relative w-full sm:w-3/4">
            <input
              type="text"
              id="search-input"
              placeholder="Search endpoints (e.g., /api/milling/users)"
              className="w-full p-3 pl-10 bg-[rgba(30,30,50,0.8)] backdrop-blur-md text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-space-nebula-pink transition-all shadow-md hover:shadow-lg"
              onChange={(e) => handleSearchInput(e.target.value)}
              aria-label="Search API endpoints"
            />
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-3 text-gray-400 hover:text-space-nebula-pink transition-colors"
                aria-label="Clear search"
              >
                <X size={20} />
              </button>
            )}
          </div>
          <button
            onClick={handleClearSearch}
            className="mt-4 sm:mt-0 sm:ml-4 bg-[rgba(255,107,107,0.2)] backdrop-blur-md text-space-nebula-pink px-6 py-2 rounded-full hover:bg-space-nebula-pink hover:text-white transition-all shadow-md hover:shadow-lg"
          >
            Clear
          </button>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-2 mb-8 backdrop-blur-md bg-[rgba(30,30,50,0.8)] p-4 rounded-xl border border-gray-600 shadow-xl"
        >
          {['all', 'inventory', 'production', 'authentication', 'orders'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-space-nebula-pink text-white shadow-md'
                  : 'text-gray-200 hover:bg-[rgba(255,107,107,0.2)] hover:text-space-nebula-pink'
              }`}
              onClick={() => setActiveTab(tab)}
              aria-current={activeTab === tab ? 'true' : 'false'}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* API Sections */}
        <AnimatePresence>
          {apiSections.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: activeTab === section.id || activeTab === 'all' ? 1 : 0,
                height: activeTab === section.id || activeTab === 'all' ? 'auto' : 0,
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`tab-section ${activeTab === section.id || activeTab === 'all' ? 'block' : 'hidden'}`}
            >
              <h2 className="text-2xl font-semibold mb-6 text-space-light-purple">
                {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              </h2>
              {section.endpoints.map((endpoint, index) => {
                const endpointId = `${section.id}-${index}`;
                const isExpanded = expandedSections[endpointId];

                return (
                  <motion.div
                    key={index}
                    className={`mb-8 backdrop-blur-md bg-[rgba(30,30,50,0.8)] rounded-xl p-6 border border-gray-600 shadow-xl hover:shadow-2xl transition-shadow duration-300 ${
                      filterSections(endpoint.path) ? '' : 'hidden'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex items-center flex-wrap gap-3">
                        <span
                          className={`px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-md ${
                            endpoint.method === 'GET'
                              ? 'bg-green-500/20 text-green-400'
                              : endpoint.method === 'POST'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}
                        >
                          {endpoint.method}
                        </span>
                        <div className="inline-flex items-center bg-[rgba(255,255,255,0.1)] backdrop-blur-md px-3 py-1 rounded-lg shadow-inner">
                          <span className="font-mono text-space-nebula-pink">{endpoint.path}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-4 sm:mt-0">
                        <button
                          onClick={() => handleCopy(endpoint.path)}
                          title="Copy endpoint"
                          className="p-2 rounded-full hover:bg-[rgba(255,107,107,0.2)] transition-colors"
                          aria-label="Copy endpoint URL"
                        >
                          <Copy className="h-5 w-5 text-gray-400 hover:text-space-nebula-pink" />
                        </button>
                        <button
                          onClick={() => handleExpand(endpointId)}
                          title={isExpanded ? 'Collapse' : 'Expand'}
                          className="p-2 rounded-full hover:bg-[rgba(255,107,107,0.2)] transition-colors"
                          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                        >
                          <ChevronDown
                            className={`h-5 w-5 text-gray-400 hover:text-space-nebula-pink transition-transform ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-200 mt-2">{endpoint.description}</p>

                    {/* Collapsible Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-4"
                        >
                          {endpoint.parameters && <ParametersTable parameters={endpoint.parameters} />}
                          {endpoint.headers && <HeadersTable headers={endpoint.headers} />}
                          {endpoint.requestBody && <RequestBody body={endpoint.requestBody} />}
                          {endpoint.response && (
                            <Response status={endpoint.response.status} body={endpoint.response.body} />
                          )}
                          {endpoint.errorResponse && (
                            <ErrorResponse
                              status={endpoint.errorResponse.status}
                              body={endpoint.errorResponse.body}
                            />
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.section>
          ))}
        </AnimatePresence>

        {/* Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="backdrop-blur-md bg-[rgba(30,30,50,0.8)] rounded-xl p-6 mt-12 border border-gray-600 shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-space-light-purple mb-4">Best Practices</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Use HTTPS for all API requests to ensure security.</li>
            <li>Cache responses to reduce API calls and improve performance.</li>
            <li>Include a valid JWT token in the <code>Authorization</code> header.</li>
            <li>Handle errors gracefully and check response statuses.</li>
            <li>Respect rate limits to avoid throttling.</li>
          </ul>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-12 cursor-pointer"
          onClick={handleScrollDown}
        >
          <p className="text-gray-200">Explore More</p>
          <ChevronDown className="h-6 w-6 mx-auto text-space-nebula-pink mt-2 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default APIDocumentationSection;