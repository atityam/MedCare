require('dotenv').config();
const jwt = require('jsonwebtoken');

console.log('Environment variables check:');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Loaded' : 'Not loaded');
console.log('MONGO_URL:', process.env.MONGO_URL ? 'Loaded' : 'Not loaded');

try {
    const testToken = jwt.sign({ test: true }, process.env.JWT_SECRET);
    console.log('JWT Token generation test: Success');
} catch (error) {
    console.log('JWT Token generation test failed:', error.message);
}