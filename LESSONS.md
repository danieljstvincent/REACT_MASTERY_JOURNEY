# Create all exercise markdown files
cd ~/projects/react-mastery-journey

# FUNDAMENTALS Exercises
cat > exercises/01-counter.md << 'EOF'
# Exercise 1: Counter Component

## 🎯 Objectives
- Understand React components and props
- Master useState hook
- Handle user events
- Practice TypeScript with React

## 📝 Task
Create a counter component that can:
- Increment, decrement, and reset count
- Display current count
- Show different messages based on count value
- Use TypeScript interfaces

## 🛠️ Requirements
- Use functional components
- Implement useState hook
- Handle click events
- Add conditional rendering
- Include basic styling

## 📁 Files to Create
- `src/components/features/Counter.tsx`
- `src/components/features/Counter.test.tsx`

## 💡 Bonus Challenges
1. Add maximum/minimum limits
2. Create a step prop to control increment size
3. Add keyboard shortcuts (arrow keys)
4. Implement animation on count change

## ✅ Success Criteria
- [ ] Counter starts at 0
- [ ] + button increments count
- [ ] - button decrements count  
- [ ] Reset button sets count to 0
- [ ] TypeScript shows no errors
- [ ] Tests pass
- [ ] Responsive styling
EOF

cat > exercises/02-todo-list.md << 'EOF'
# Exercise 2: Todo List Application

## 🎯 Objectives
- Manage complex state with arrays and objects
- Implement CRUD operations (Create, Read, Update, Delete)
- Practice list rendering and keys
- Use multiple state variables effectively

## 📝 Task
Build a todo list with:
- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Filter todos (all/active/completed)
- Persist data in localStorage

## 🛠️ Requirements
- Use TypeScript interfaces for Todo type
- Implement array operations (filter, map, find)
- Create reusable TodoItem component
- Add input validation

## 📁 Files to Create
- `src/types/todo.ts`
- `src/components/features/TodoList.tsx`
- `src/components/features/TodoItem.tsx`
- `src/components/features/TodoFilters.tsx`

## 💡 Bonus Challenges
1. Add due dates to todos
2. Implement drag and drop reordering
3. Add categories/tags
4. Create bulk operations

## ✅ Success Criteria
- [ ] Add new todos
- [ ] Toggle todo completion
- [ ] Delete todos
- [ ] Filter by status
- [ ] Persist in localStorage
- [ ] Input validation
- [ ] No TypeScript errors
EOF

cat > exercises/03-form-validation.md << 'EOF'
# Exercise 3: Form with Validation

## 🎯 Objectives
- Handle form state and submissions
- Implement client-side validation
- Manage form errors and loading states
- Practice controlled components

## 📝 Task
Create a user profile form with:
- Name, email, password fields
- Real-time validation
- Error message display
- Form submission handling
- Success/error states

## 🛠️ Requirements
- Use controlled components
- Implement custom validation rules
- Show inline error messages
- Handle form submission
- Reset form after success

## 📁 Files to Create
- `src/types/user.ts`
- `src/components/features/UserProfileForm.tsx`
- `src/utils/validation.ts`

## 💡 Bonus Challenges
1. Add password strength meter
2. Implement form steps (multi-page form)
3. Add file upload for avatar
4. Create reusable form components

## ✅ Success Criteria
- [ ] Real-time validation
- [ ] Error message display
- [ ] Form submission handling
- [ ] Loading states
- [ ] Success feedback
- [ ] Input masking (if applicable)
EOF

# INTERMEDIATE Exercises
cat > exercises/04-custom-hooks.md << 'EOF'
# Exercise 4: Custom React Hooks

## 🎯 Objectives
- Create reusable custom hooks
- Understand hook rules and best practices
- Extract component logic into hooks
- Practice TypeScript with hooks

## 📝 Task
Build three custom hooks:
1. **useTimer**: Countdown timer with controls
2. **useFetch**: Generic API data fetcher
3. **useLocalStorage**: Sync state with localStorage

## 🛠️ Requirements
- Follow Rules of Hooks
- Proper TypeScript generics
- Error handling
- Cleanup in useEffect

## 📁 Files to Create
- `src/hooks/useTimer.ts`
- `src/hooks/useFetch.ts` 
- `src/hooks/useLocalStorage.ts`
- `src/hooks/useForm.ts`

## 💡 Bonus Challenges
1. Add pause/resume to useTimer
2. Implement request cancellation in useFetch
3. Create useDebounce for search inputs
4. Build useEventListener hook

## ✅ Success Criteria
- [ ] Hooks are reusable
- [ ] Proper TypeScript types
- [ ] Error handling implemented
- [ ] No hook rule violations
- [ ] Tests for each hook
EOF

cat > exercises/05-context-api.md << 'EOF'
# Exercise 5: Context API & Global State

## 🎯 Objectives
- Understand React Context API
- Manage global application state
- Avoid prop drilling
- Implement theme switching

## 📝 Task
Create a theme context system:
- Light/dark theme toggle
- Theme persistence
- Apply themes to entire app
- Create authentication context

## 🛠️ Requirements
- Create ThemeContext and AuthContext
- Custom hooks for context consumption
- Context providers
- Persist theme preference

## 📁 Files to Create
- `src/context/ThemeContext.tsx`
- `src/context/AuthContext.tsx`
- `src/hooks/useTheme.ts`
- `src/hooks/useAuth.ts`

## 💡 Bonus Challenges
1. Add system theme detection
2. Implement multiple color schemes
3. Create context for notifications
4. Add context performance optimization

## ✅ Success Criteria
- [ ] Theme switches work
- [ ] State persists on refresh
- [ ] No prop drilling
- [ ] Proper TypeScript types
- [ ] Performance optimized
EOF

cat > exercises/06-performance.md << 'EOF'
# Exercise 6: Performance Optimization

## 🎯 Objectives
- Identify performance bottlenecks
- Implement optimization techniques
- Use React DevTools Profiler
- Understand when to optimize

## 📝 Task
Optimize existing components:
- Memoize expensive calculations
- Prevent unnecessary re-renders
- Implement virtual scrolling
- Code split large components

## 🛠️ Requirements
- Use React.memo, useMemo, useCallback
- Implement windowing/virtualization
- Analyze with React DevTools
- Measure bundle size

## 📁 Files to Create
- `src/components/patterns/OptimizedList.tsx`
- `src/components/patterns/MemoizedComponents.tsx`
- `src/utils/performance.ts`

## 💡 Bonus Challenges
1. Implement React.lazy for route splitting
2. Add bundle analyzer
3. Create performance monitoring
4. Implement intersection observer for images

## ✅ Success Criteria
- [ ] Reduced re-renders
- [ ] Faster initial load
- [ ] Smooth scrolling in large lists
- [ ] Bundle size optimized
EOF

# ADVANCED Exercises
cat > exercises/07-advanced-patterns.md << 'EOF'
# Exercise 7: Advanced Component Patterns

## 🎯 Objectives
- Master compound components
- Implement render props pattern
- Create higher-order components
- Understand design pattern trade-offs

## 📝 Task
Build advanced UI patterns:
1. **Compound Components**: Accordion, Tabs
2. **Render Props**: Data fetcher, hover handler
3. **HOCs**: withAuthentication, withLoading

## 🛠️ Requirements
- Flexible component APIs
- Proper TypeScript generics
- Context API where appropriate
- Composition over configuration

## 📁 Files to Create
- `src/components/patterns/Accordion.tsx`
- `src/components/patterns/Tabs.tsx`
- `src/components/patterns/DataFetcher.tsx`
- `src/hocs/withAuthentication.tsx`

## 💡 Bonus Challenges
1. Create a command palette component
2. Implement drag-and-drop interface
3. Build a spreadsheet-like data grid
4. Create a custom hook library

## ✅ Success Criteria
- [ ] Flexible component APIs
- [ ] Proper TypeScript support
- [ ] No prop drilling
- [ ] Performance optimized
- [ ] Comprehensive tests
EOF

cat > exercises/08-state-management.md << 'EOF'
# Exercise 8: Advanced State Management

## 🎯 Objectives
- Compare state management solutions
- Implement Zustand store
- Create Redux slice with Toolkit
- Understand middleware and devtools

## 📝 Task
Build the same feature with different state managers:
- Todo app with Zustand
- Shopping cart with Redux Toolkit
- Compare developer experience

## 🛠️ Requirements
- TypeScript integration
- Middleware (logging, persistence)
- DevTools integration
- Async actions

## 📁 Files to Create
- `src/store/useTodoStore.ts` (Zustand)
- `src/store/cartSlice.ts` (Redux Toolkit)
- `src/store/index.ts`

## 💡 Bonus Challenges
1. Implement Redux Saga for side effects
2. Create a state machine with XState
3. Add offline persistence
4. Implement optimistic updates

## ✅ Success Criteria
- [ ] Both implementations work
- [ ] TypeScript fully integrated
- [ ] DevTools working
- [ ] Middleware implemented
- [ ] Performance optimized
EOF

cat > exercises/09-testing-strategies.md << 'EOF'
# Exercise 9: Comprehensive Testing

## 🎯 Objectives
- Implement testing pyramid strategy
- Write unit, integration, and E2E tests
- Mock external dependencies
- Test accessibility

## 📝 Task
Create comprehensive test suite:
- Unit tests for utilities and hooks
- Integration tests for components
- User flow tests
- Accessibility tests

## 🛠️ Requirements
- React Testing Library
- Jest for unit tests
- MSW for API mocking
- @testing-library/user-event

## 📁 Files to Create
- `src/__tests__/unit/hooks.test.ts`
- `src/__tests__/integration/userFlows.test.tsx`
- `src/mocks/handlers.ts` (MSW)
- `src/utils/test-utils.tsx`

## 💡 Bonus Challenges
1. Implement visual regression testing
2. Add performance testing
3. Create E2E tests with Playwright
4. Set up test coverage reporting

## ✅ Success Criteria
- [ ] High test coverage
- [ ] Tests resemble user behavior
- [ ] Accessibility tested
- [ ] Fast test execution
- [ ] Reliable mocks
EOF

cat > exercises/10-architecture.md << 'EOF'
# Exercise 10: Application Architecture

## 🎯 Objectives
- Design scalable React architecture
- Implement feature-based organization
- Set up build optimization
- Configure development tools

## 📝 Task
Refactor application architecture:
- Feature-based folder structure
- Absolute imports configuration
- Environment-based configuration
- Build optimization setup

## 🛠️ Requirements
- Monorepo-like structure
- Path aliases configured
- Environment variables
- Bundle optimization

## 📁 Files to Create
- `src/features/` (reorganized structure)
- `vite.config.ts` (or webpack config)
- `.env` files
- `package.json` scripts

## 💡 Bonus Challenges
1. Implement micro-frontend architecture
2. Set up CI/CD pipeline
3. Add Docker configuration
4. Create component documentation

## ✅ Success Criteria
- [ ] Clean, scalable structure
- [ ] Fast build times
- [ ] Environment-specific configs
- [ ] Easy team collaboration
- [ ] Production-ready setup
EOF

# Create a master roadmap
cat > exercises/ROADMAP.md << 'EOF'
# React Mastery Roadmap

## 🟢 FUNDAMENTALS (2 weeks)
- [ ] Exercise 1: Counter Component
- [ ] Exercise 2: Todo List Application  
- [ ] Exercise 3: Form Validation
- [ ] Exercise 4: Component Composition
- [ ] Exercise 5: API Integration

## 🟡 INTERMEDIATE (2 weeks)
- [ ] Exercise 6: Custom Hooks
- [ ] Exercise 7: Context API
- [ ] Exercise 8: Performance Optimization
- [ ] Exercise 9: Testing Strategies
- [ ] Exercise 10: Routing & Navigation

## 🔴 ADVANCED (2 weeks)
- [ ] Exercise 11: Advanced Patterns
- [ ] Exercise 12: State Management
- [ ] Exercise 13: TypeScript Mastery
- [ ] Exercise 14: Architecture & Scalability
- [ ] Exercise 15: Production Ready Apps

## 🚀 BONUS: Real Projects
- [ ] E-commerce site
- [ ] Dashboard application
- [ ] Social media clone
- [ ] Portfolio website

## 📚 Assessment Checklist
After completing all exercises, you should be able to:
- [ ] Build complex applications from scratch
- [ ] Optimize performance effectively
- [ ] Write comprehensive tests
- [ ] Architect scalable solutions
- [ ] Debug complex issues
- [ ] Mentor other developers
EOF

echo "✅ All exercise files created!"
echo "📚 Check the exercises/ directory for your complete learning path"
echo "🚀 Start with: exercises/01-counter.md"