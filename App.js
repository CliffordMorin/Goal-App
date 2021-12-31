import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
	return (
		<View style={{ padding: 50 }}>
			<View style={{ flexDirection: 'row' }}>
				<TextInput
					placeholder="Enter Goals Here!"
					style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}
				/>
				<Button title="ADD" />
			</View>
			<View />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({});
