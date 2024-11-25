import React, { useState, useEffect } from 'react';

interface Props {
}

interface State {
  count: number;
  data: string | null;
  error: string | null;
}

class LifecycleClassComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
      data: null,
      error: null
    };
    console.log('1. Constructor called - Component initialized');
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    console.log('2. getDerivedStateFromProps called');
    return null;
  }

  componentDidMount() {
    console.log('4. componentDidMount called - Component mounted');
    setTimeout(() => {
      this.setState({ data: 'Data loaded!' });
    }, 2000);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('5. shouldComponentUpdate called - Should component re-render?');
    return true;
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log('6. componentDidUpdate called - Component updated');
    if (prevState.count !== this.state.count) {
      console.log('Count was updated!');
    }
  }

  componentWillUnmount() {
    console.log('7. componentWillUnmount called - Component will be destroyed');
  }

  handleIncrement = () => {
    this.setState(prev => ({ ...prev, count: prev.count + 1 }));
  };

  render() {
    console.log('3. Render called - Component rendering');
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Class Component Lifecycle</h2>
        <p className="mb-2">Count: {this.state.count}</p>
        <p className="mb-4">Data: {this.state.data || 'Loading...'}</p>
        <button
          onClick={this.handleIncrement}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    );
  }
}

const LifecycleFunctionalComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    console.log('1. Component mounted (useEffect with empty dependency array)');
    
    const timer = setTimeout(() => {
      setData('Data loaded!');
    }, 2000);

    return () => {
      console.log('4. Component will unmount (cleanup function)');
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log('2. Count updated (useEffect with count dependency)');
    }
  }, [count]);

  useEffect(() => {
    console.log('3. Component rendered/updated (useEffect with no dependencies)');
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Functional Component Lifecycle</h2>
      <p className="mb-2">Count: {count}</p>
      <p className="mb-4">Data: {data || 'Loading...'}</p>
      <button
        onClick={() => setCount(prev => prev + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Increment
      </button>
    </div>
  );
};

const LifeCycle: React.FC = () => {
  const [showComponents, setShowComponents] = useState<boolean>(true);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <button
          onClick={() => setShowComponents(prev => !prev)}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mb-4"
        >
          {showComponents ? 'Unmount Components' : 'Mount Components'}
        </button>
      </div>

      {showComponents && (
        <div className="space-y-8">
          <LifecycleClassComponent />
          <LifecycleFunctionalComponent />
        </div>
      )}

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="text-xl font-bold mb-2">Instructions:</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Open browser console to see lifecycle method logs</li>
          <li>Click increment buttons to trigger updates</li>
          <li>Use Mount/Unmount button to see mounting and cleanup effects</li>
          <li>Notice the different patterns between class and functional components</li>
        </ol>
      </div>
    </div>
  );
};

export default LifeCycle;