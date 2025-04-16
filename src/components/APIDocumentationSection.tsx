import React, { useState, useRef } from 'react';

const APIDocumentationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handle tab click
  const handleTabClick = (tabId: string): void => {
    setActiveTab(tabId);
  };

  // Handle search input
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Handle clear search
  const handleClearSearch = (): void => {
    setSearchTerm('');
    const searchInput = document.getElementById('search-input') as HTMLInputElement | null;
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
  };

  // Handle expand section
  const handleExpand = (endpointId: string): void => {
    setExpandedSections((prev) => ({
      ...prev,
      [endpointId]: !prev[endpointId],
    }));
  };

  // Handle copy endpoint
  const handleCopy = (endpoint: string): void => {
    navigator.clipboard.writeText(endpoint).then(() => {
      alert(`Endpoint copied to clipboard: ${endpoint}`);
    });
  };

  // Handle scroll down
  const handleScrollDown = (): void => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  // Filter sections based on search term
  const filterSections = (endpoint: string): boolean => {
    return endpoint.toLowerCase().includes(searchTerm);
  };

  // Parameters Table Component
  const ParametersTable = ({ parameters }: { parameters: any[] }) => (
    <div className="mt-4">
      <h3 className="bg-gray-800 p-2 rounded-t-lg font-semibold text-white">Parameters</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2 text-left text-gray-300">NAME</th>
            <th className="p-2 text-left text-gray-300">TYPE</th>
            <th className="p-2 text-left text-gray-300">REQUIRED</th>
            <th className="p-2 text-left text-gray-300">DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((param, index) => (
            <tr key={index} className="border-t border-gray-600">
              <td className="p-2 text-white">{param.name}</td>
              <td className="p-2 text-white">{param.type}</td>
              <td className="p-2">
                <span className={param.required ? 'text-red-500' : 'text-gray-400'}>
                  {param.required ? 'Required' : 'Optional'}
                </span>
              </td>
              <td className="p-2 text-gray-300">{param.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Headers Table Component
  const HeadersTable = ({ headers }: { headers: any[] }) => (
    <div className="mt-4">
      <h3 className="bg-gray-800 p-2 rounded-t-lg font-semibold text-white">Request Headers</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2 text-left text-gray-300">NAME</th>
            <th className="p-2 text-left text-gray-300">VALUE</th>
            <th className="p-2 text-left text-gray-300">REQUIRED</th>
          </tr>
        </thead>
        <tbody>
          {headers.map((header, index) => (
            <tr key={index} className="border-t border-gray-600">
              <td className="p-2 text-white">{header.name}</td>
              <td className="p-2 text-white">{header.value}</td>
              <td className="p-2">
                <span className={header.required ? 'text-red-500' : 'text-gray-400'}>
                  {header.required ? 'Required' : 'Optional'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Request Body Component
  const RequestBody = ({ body }: { body: string }) => (
    <div className="mt-4">
      <h3 className="bg-gray-800 p-2 rounded-t-lg font-semibold text-white">Request Body</h3>
      <div className="p-2 bg-gray-700 rounded-b-lg">
        <pre className="text-white">{body}</pre>
      </div>
    </div>
  );

  // Response Component
  const Response = ({ status, body }: { status: string; body: string }) => (
    <div className="mt-4">
      <h3 className="bg-gray-800 p-2 rounded-t-lg font-semibold text-white">Response</h3>
      <div className="p-2 bg-gray-700 rounded-b-lg">
        <p className="text-gray-300">
          <strong>Status:</strong> {status}
        </p>
        <pre className="text-white mt-2">{body}</pre>
      </div>
    </div>
  );

  // Error Response Component
  const ErrorResponse = ({ status, body }: { status: string; body: string }) => (
    <div className="mt-4">
      <h3 className="bg-gray-800 p-2 rounded-t-lg font-semibold text-white">Error Response</h3>
      <div className="p-2 bg-gray-700 rounded-b-lg">
        <p className="text-gray-300">
          <strong>Status:</strong> {status}
        </p>
        <pre className="text-white mt-2">{body}</pre>
      </div>
    </div>
  );

  return (
    <section id="api" className="py-20 relative z-10" ref={sectionRef}>
      <div className="container mx-auto px-4 appear">
        <h2 className="text-4xl font-bold text-purple-400 text-center mb-8">API Documentation</h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-4">
          Explore and understand all available API endpoints in the system
        </p>

        {/* Search Bar */}
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-full">
            <input
              type="text"
              id="search-input"
              placeholder="Search endpoints..."
              className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={handleSearchInput}
              value={searchTerm}
            />
            <svg
              className="absolute left-3 top-3 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button
            onClick={handleClearSearch}
            className="ml-2 border-2 border-purple-500 text-purple-500 bg-transparent px-4 py-1 rounded-full hover:bg-purple-500 hover:text-white transition-all"
          >
            Clear
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-4">
          {['all', 'users', 'products', 'authentication', 'orders'].map((tab) => (
            <button
              key={tab}
              className={`nav-tab px-4 py-2 rounded-full ${
                activeTab === tab ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'
              }`}
              data-tab={tab}
              onClick={() => handleTabClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {[
          {
            id: 'all',
            endpoints: [
              {
                method: 'GET',
                path: '/api/users',
                description: 'Retrieves a list of all users',
                parameters: [
                  { name: 'page', type: 'integer', required: false, description: 'Page number for pagination' },
                  { name: 'limit', type: 'integer', required: false, description: 'Number of items per page' },
                  { name: 'sort', type: 'string', required: false, description: 'Field to sort by (e.g., name, created_at)' },
                ],
                headers: [
                  { name: 'Authorization', value: `Bearer {'{token}'}`, required: true },
                ],
                response: {
                  status: '200 OK',
                  body: `[
    {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "created_at": "2023-01-01T12:00:00Z"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane@example.com",
        "created_at": "2023-01-02T12:00:00Z"
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
            id: 'users',
            endpoints: [
              {
                method: 'GET',
                path: '/api/users/{id}',
                description: 'Retrieves details of a specific user by ID',
                parameters: [
                  { name: 'id', type: 'integer', required: true, description: 'The ID of the user to retrieve' },
                ],
                headers: [
                  { name: 'Authorization', value: `Bearer {'{token}'}`, required: true },
                ],
                response: {
                  status: '200 OK',
                  body: `{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2023-01-01T12:00:00Z"
}`,
                },
                errorResponse: {
                  status: '404 Not Found',
                  body: `{
    "error": "User not found"
}`,
                },
              },
            ],
          },
          {
            id: 'products',
            endpoints: [
              {
                method: 'GET',
                path: '/api/products',
                description: 'Retrieves a list of all products',
                parameters: [
                  { name: 'category', type: 'string', required: false, description: 'Filter products by category' },
                  { name: 'limit', type: 'integer', required: false, description: 'Number of items per page' },
                ],
                headers: [
                  { name: 'Authorization', value: `Bearer {'{token}'}`, required: true },
                ],
                response: {
                  status: '200 OK',
                  body: `[
    {
        "id": 1,
        "name": "Product A",
        "category": "Electronics",
        "price": 299.99
    },
    {
        "id": 2,
        "name": "Product B",
        "category": "Clothing",
        "price": 49.99
    }
]`,
                },
                errorResponse: {
                  status: '400 Bad Request',
                  body: `{
    "error": "Invalid category parameter"
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
                description: 'Authenticates a user and returns a token',
                parameters: [
                  { name: 'email', type: 'string', required: true, description: "User's email address" },
                  { name: 'password', type: 'string', required: true, description: "User's password" },
                ],
                headers: [
                  { name: 'Content-Type', value: 'application/json', required: true },
                ],
                requestBody: `{
    "email": "user@example.com",
    "password": "yourpassword"
}`,
                response: {
                  status: '200 OK',
                  body: `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": 1,
        "email": "user@example.com"
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
                path: '/api/orders',
                description: 'Retrieves a list of all orders',
                parameters: [
                  { name: 'user_id', type: 'integer', required: false, description: 'Filter orders by user ID' },
                  { name: 'status', type: 'string', required: false, description: 'Filter orders by status (e.g., pending, shipped)' },
                ],
                headers: [
                  { name: 'Authorization', value: `Bearer {'{token}'}`, required: true },
                ],
                response: {
                  status: '200 OK',
                  body: `[
    {
        "id": 1,
        "user_id": 1,
        "status": "pending",
        "total": 349.98,
        "created_at": "2023-01-01T12:00:00Z"
    },
    {
        "id": 2,
        "user_id": 2,
        "status": "shipped",
        "total": 49.99,
        "created_at": "2023-01-02T12:00:00Z"
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
        ].map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={`tab-section ${activeTab === section.id ? 'active' : 'hidden'}`}
          >
            <h2 className="text-lg font-semibold mb-4 text-purple-400">
              {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
            </h2>
            {section.endpoints.map((endpoint, index) => {
              const endpointId = `${section.id}-${index}`;
              const isExpanded = expandedSections[endpointId];

              return (
                <div key={index} className={`mb-6 ${filterSections(endpoint.path) ? '' : 'hidden'}`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span
                        className={`px-2 py-1 rounded-lg mr-2 ${
                          endpoint.method === 'GET' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {endpoint.method}
                      </span>
                      <div className="inline-flex items-center bg-[rgba(255,255,255,0.1)] backdrop-blur-md px-3 py-1 rounded-lg">
                        <span className="font-mono text-purple-400 endpoint">{endpoint.path}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button onClick={() => handleCopy(endpoint.path)} title="Copy endpoint">
                        <svg
                          className="h-5 w-5 text-gray-400 hover:text-purple-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                      <button onClick={() => handleExpand(endpointId)} title={isExpanded ? 'Collapse' : 'Expand'}>
                        <svg
                          className={`h-5 w-5 text-gray-400 hover:text-purple-400 transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-1">{endpoint.description}</p>

                  {/* Collapsible Details */}
                  {isExpanded && (
                    <div className="mt-4 space-y-4">
                      {endpoint.parameters && <ParametersTable parameters={endpoint.parameters} />}
                      {endpoint.headers && <HeadersTable headers={endpoint.headers} />}
                      {endpoint.requestBody && <RequestBody body={endpoint.requestBody} />}
                      {endpoint.response && <Response status={endpoint.response.status} body={endpoint.response.body} />}
                      {endpoint.errorResponse && (
                        <ErrorResponse status={endpoint.errorResponse.status} body={endpoint.errorResponse.body} />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        ))}

        {/* Scroll Down Indicator */}
        <div className="text-center mt-8 cursor-pointer" onClick={handleScrollDown}>
          <p className="text-gray-400">Scroll Down</p>
          <svg
            className="h-6 w-6 mx-auto text-gray-400 mt-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default APIDocumentationSection;