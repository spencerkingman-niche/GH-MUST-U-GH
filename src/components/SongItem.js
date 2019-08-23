import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import * as Colors from '../styles/colors';
import { SFProDisplayMedium } from '../fonts/SFProDisplayMedium';
import { SONG } from '../navigation/Screens';

const styles = StyleSheet.create({
	contentContainer: {
		width: '76%',
		flexDirection: 'column',
		paddingLeft: 15,
		justifyContent: 'center',
	},
	image: {
		width: 100,
		height: 55,
		left: -15,
		position: 'absolute',
	},
	imageContainer: {
		overflow: 'hidden',
		height: 55,
		borderRadius: 4,
		width: 55,
		backgroundColor: 'transparent',
		marginLeft: 10,
	},
	mainContainer: {
		paddingVertical: 15,
		alignItems: 'center',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: Colors.gray02,
		width: '100%',
	},
	originalBy: {
		color: Colors.gray01,
		fontSize: 16,
		fontFamily: 'Fenix',
	},
	subtitle: {
		color: Colors.gray03,
		fontSize: 16,
		fontFamily: 'Fenix',
	},
	title: {
		color: Colors.gray01,
		fontSize: 20,
		fontFamily: 'Fenix',
		marginBottom: 3,
	},
});

export class SongItem extends React.PureComponent {
	handlePress = () => {
		const {
			date,
			description,
			id,
			imageSrc,
			lyrics,
			playlistId,
			position,
			thumbnailSrc,
			title,
		} = this.props;
		Navigation.push('MAIN', {
			component: {
				name: SONG,
				passProps: {
					date,
					description,
					id,
					imageSrc,
					lyrics,
					playlistId,
					position,
					thumbnailSrc,
					title,
				},
				options: {
					topBar: {
						title: {
							text: this.props.title,
						},
						rightButtons: [{ id: 'nextSong', systemItem: 'fastForward' }],
					},
				},
			},
		});
	};

	render() {
		return (
			<TouchableOpacity onPress={this.handlePress} style={styles.mainContainer}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{ uri: this.props.thumbnailSrc }} />
				</View>
				<View style={styles.contentContainer}>
					<SFProDisplayMedium style={styles.title}>{this.props.title}</SFProDisplayMedium>
					{this.props.songType === 'cover' && (
						<SFProDisplayMedium style={styles.originalBy}>
							{this.props.originalBy}
						</SFProDisplayMedium>
					)}
					{this.props.songType === 'original' && (
						<SFProDisplayMedium style={styles.subtitle}>
							{this.props.date.slice(0, 10)}
						</SFProDisplayMedium>
					)}
				</View>
			</TouchableOpacity>
		);
	}
}

SongItem.propTypes = {
	date: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	originalBy: PropTypes.string,
	playlistId: PropTypes.string.isRequired,
	position: PropTypes.number.isRequired,
	songType: PropTypes.oneOf(['cover', 'original']).isRequired,
	thumbnailSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

SongItem.defaultProps = {
	originalBy: '',
};
